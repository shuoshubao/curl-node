const fs = require('fs');
const path = require('path');
const os = require('os');

const homedir = os.homedir();

const ConfigPath = path.resolve(homedir, 'Library/Application Support/Sublime Text 3/Packages/User/Preferences.sublime-settings');

const config = {
    "caret_style": "smooth",
    "detect_indentation": false,
    "draw_white_space": "selection",
    "ensure_newline_at_eof_on_save": true,
    "file_exclude_patterns":
    [
        "*.pyc",
        "*.pyo",
        "*.exe",
        "*.dll",
        "*.obj",
        "*.o",
        "*.a",
        "*.lib",
        "*.so",
        "*.dylib",
        "*.ncb",
        "*.sdf",
        "*.suo",
        "*.pdb",
        "*.idb",
        ".DS_Store",
        "*.class",
        "*.psd",
        "*.db",
        "*.sublime-workspace",
        "._*"
    ],
    "find_selected_text": true,
    "folder_exclude_patterns":
    [
        ".svn",
        ".git",
        ".hg",
        "CVS"
    ],
    "font_size": 22,
    "highlight_line": true,
    "ignored_packages":
    [
        "Vintage"
    ],
    "indent_to_bracket": true,
    "match_brackets_angle": false,
    "match_brackets_braces": false,
    "tab_size": 4,
    "theme": "Default.sublime-theme",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "word_wrap": false
};

console.log(fs.readFileSync(ConfigPath).toString());
