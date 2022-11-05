export function getSystemDarkTheme(): string {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function switchTheme(): void {
  const curTheme = getDocumentAttribute("theme");
  const newTheme = curTheme === "dark" ? "light" : "dark";
  setDocumentAttribute("theme", newTheme);
}

export function getDocumentAttribute(name: string): string | null {
  return document.documentElement.getAttribute(name);
}

export function setDocumentAttribute(name: string, value: string): void {
  document.documentElement.setAttribute(name, value);
}

export enum GlobalAttributes {
  Theme = "theme",
}

export enum IconsNames {
  expandLess = "expand_less",
  expandMore = "expand_more",
  deleteIcon = "delete",
  darkMode = "dark_mode",
}
