"use client"

import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-background hover:bg-foreground/10"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  )
}