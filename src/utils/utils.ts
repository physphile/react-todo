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

export function getTimeAgo(date: Date | undefined) {
  if (typeof date === "undefined") return ""
  const ms = Date.now() - date.getTime();
  let minutes = Math.trunc(ms / 60000);
  let hours = Math.trunc(minutes / 60);
  minutes %= 60;
  let days = Math.trunc(hours / 24);
  hours %= 24;
  let months = Math.trunc(days / 30);
  days %= 30;

  if (months !== 0) {
    if (months === 1) return "1 month ago";
    else return `${months} months ago`;
  } else if (days !== 0) {
    if (days === 1) return "yesterday";
    else return `${days} days ago`;
  } else if (hours !== 0) {
    if (hours === 1) return "1 hour ago";
    else return `${hours} hours ago`;
  } else if (minutes !== 0) {
    if (minutes === 1) return "1 minute ago";
    else return `${minutes} minutes ago`;
  } else return "now";
}

export function mergeClasses(...classes: string[]) {
  return classes.join(" ");
}
