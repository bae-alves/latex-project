# Create LaTeX Project

Adds a **Create LaTeX Project** command to the Command Palette. It asks for a
parent folder and a project name, creates this structure, and opens it:

```
<name>/
├── .gitignore
├── README.md
├── .vscode/
│   ├── extensions.json            # LaTeX Workshop, LaTeX Utilities, LTeX+, Code Spell Checker, Emojisense
│   ├── ltex.dictionary.en-US.txt
│   └── settings.json              # latexmk + LuaLaTeX recipes, build on save
├── src/
│   ├── main.tex                   # half-A4 KOMA-Script document, Noto Sans
│   └── print.tex                  # 2-up imposition of main.pdf onto landscape A4
├── build/                         # aux files and logs
└── output/                        # PDFs and SyncTeX
```

Requires a TeX distribution with `latexmk` and LuaLaTeX, and the Noto fonts (including Noto Color Emoji).
The generated project's README has install instructions.

Project names may contain letters, digits, `.` and `-` only.
