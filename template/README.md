# {{name}}

## VS Code LaTeX setup

Open this folder in VS Code and install the recommended extensions when prompted.
LaTeX Workshop provides the build button, automatic compilation on save, PDF
preview in an editor tab, and source/PDF synchronization. LaTeX Utilities adds
LaTeX editing helpers; LTeX and Code Spell Checker provide writing and spelling
checks.

You also need a TeX distribution installed on your system that provides
`latexmk`, XeLaTeX, and the Noto Sans system font (for example, TeX Live on
Linux, MacTeX on macOS, or MiKTeX on Windows). The VS Code extensions do not
include the LaTeX compiler.
On Arch Linux, install the components used by this project with:

```sh
sudo pacman -S --needed texlive-basic texlive-binextra texlive-latex texlive-latexrecommended texlive-latexextra
```

The document uses the system-installed Noto Sans font and builds with XeLaTeX
by default. On Arch Linux, install the TeX fonts required by KOMA-Script with:

```sh
sudo pacman -S --needed texlive-fontsrecommended noto-fonts
```

LaTeX sources live in `src/`, PDFs and their SyncTeX sidecars in `output/`, and
compiler logs and intermediate files in `build/`. SyncTeX sidecars stay beside
their PDFs so LaTeX Workshop can synchronize between source and preview.
`src/main.tex` is the primary document. Use the LaTeX Workshop build button (or
`Ctrl+Alt+B`) to build and preview it. To create the 2-up print layout, open
`src/print.tex`, select **Build print.pdf (build main.pdf first)** in the LaTeX
Workshop recipe picker, and build. The print recipe compiles `main.tex` before
`print.tex` because the latter includes `../output/main.pdf`.
