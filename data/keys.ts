import OSType from "../types/OSType";

export const docKeys = [
  {
    key: "global",
    children: ["capture_screen", "capture_portion", "open_image"],
  },
  {
    key: "page",
    children: [
      "save_page",
      "copy_to_clipboard",
      "create_note",
      "create_note_from_paste",
      "close_page",
    ],
  },
  {
    key: "note",
    children: [
      "delete_note",
      "move_note",
      "change_note_width",
      "escape_note",
      "focus_to_next_note",
    ],
  },
];

const isMacOS = () => process.platform === "darwin";

export type ShortcutScopeType = "global" | "page" | "note";
export type ShortcutKeyType =
  | "capture_screen"
  | "capture_portion"
  | "open_image"
  | "save_page"
  | "copy_to_clipboard"
  | "create_note"
  | "create_note_from_paste"
  | "close_page"
  | "delete_note"
  | "move_note"
  | "change_note_width"
  | "escape_note"
  | "focus_to_next_note";

export type ShortcutType = {
  key: ShortcutScopeType;
  title: string;
  shortcut: {
    win: string;
    mac: string;
  };
};

export const getShortcut = (
  shortcutType: ShortcutKeyType,
  os: OSType
): string => {
  const shortcut = shortcuts.get(shortcutType);
  return shortcut && os !== "other" ? shortcut?.shortcut[os] : "";
};

const shortcuts = new Map<ShortcutKeyType, ShortcutType>([
  //Global Shortcuts,
  [
    "capture_screen",
    {
      key: "global",
      title: "Capture Screen",

      shortcut: { mac: "⌥(Alt) + S", win: "Alt+S" },
    },
  ],
  [
    "capture_portion",
    {
      key: "global",
      title: "Capture Portion",

      shortcut: { mac: "⌥(Alt) + ⇧(Shift) + S", win: "Alt+Shift+S" },
    },
  ],
  [
    "open_image",
    {
      key: "global",
      title: "Open Image",

      shortcut: { mac: "⌥(Alt) + O", win: "Alt+O" },
    },
  ],
  [
    "save_page",
    {
      key: "page",
      title: "Save Page",

      shortcut: { mac: "⌘(Cmd) + S", win: "Ctrl + S" },
    },
  ],
  [
    "copy_to_clipboard",
    {
      key: "page",
      title: "Copy To Clipboard",

      shortcut: { mac: "⌘(Cmd) + C", win: "Ctrl + C" },
    },
  ],
  [
    "create_note",
    {
      key: "page",
      title: "Create Note",

      shortcut: { mac: "⌘(Cmd) + N", win: "Ctrl + N" },
    },
  ],
  [
    "create_note_from_paste",
    {
      key: "page",
      title: "Create Note with Paste",
      shortcut: { mac: "⌘(Cmd) + V", win: "Ctrl + V" },
    },
  ],
  [
    "close_page",
    {
      key: "page",
      title: "Close Page",
      shortcut: { mac: "⌘(Cmd) + W", win: "Ctrl + W" },
    },
  ],
  [
    "delete_note",
    {
      key: "note",
      title: "Delete Note",
      shortcut: { mac: "⌘(Cmd) + W", win: "Ctrl + W" },
    },
  ],
  [
    "move_note",
    {
      key: "note",
      title: "Move Note",
      shortcut: { mac: "⌘(Cmd) + Arrow", win: "Ctrl + Arrow" },
    },
  ],
  [
    "change_note_width",
    {
      key: "note",
      title: "",

      shortcut: {
        mac: "⌘(Cmd) + ⇧(Shift) + Arrow",
        win: "Ctrl + Shfit + Arrow",
      },
    },
  ],
  [
    "escape_note",
    {
      key: "note",
      title: "Escape Note",

      shortcut: { mac: "Escape", win: "Esc" },
    },
  ],
  [
    "focus_to_next_note",
    {
      key: "note",
      title: "Focus Next",

      shortcut: { mac: "Tab", win: "Tab" },
    },
  ],
]);
