const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// Template files containing the {{name}} placeholder.
const NAMED = ['README.md', 'src/main.tex', '.vscode/ltex.dictionary.en-US.txt'];

function scaffold(templateDir, dest, name) {
  fs.cpSync(templateDir, dest, { recursive: true, errorOnExist: true, force: false });
  for (const f of NAMED) {
    const p = path.join(dest, f);
    fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replaceAll('{{name}}', name));
  }
}

exports.scaffold = scaffold;

exports.activate = (context) => {
  context.subscriptions.push(vscode.commands.registerCommand('latexProject.create', async () => {
    const parent = await vscode.window.showOpenDialog({
      canSelectFolders: true, canSelectFiles: false, openLabel: 'Create project here',
    });
    if (!parent) return;
    // No spaces or LaTeX specials: the name goes into \title{} and latexmk paths.
    const name = await vscode.window.showInputBox({
      prompt: 'Project name',
      validateInput: (v) => (/^[A-Za-z0-9.-]+$/.test(v) ? null : 'Use letters, digits, "." and "-" only'),
    });
    if (!name) return;
    const dest = path.join(parent[0].fsPath, name);
    if (fs.existsSync(dest)) {
      vscode.window.showErrorMessage(`${dest} already exists`);
      return;
    }
    scaffold(path.join(context.extensionPath, 'template'), dest, name);
    await vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(dest));
  }));
};
