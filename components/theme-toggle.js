import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cx from "classnames";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  //   const { systemTheme, theme, setTheme } = useTheme();
  //   const currentTheme = theme === "system" ? systemTheme : theme;
  const { theme, setTheme } = useTheme();

  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className={cx(
        "bg-slate-50",
        "hover:bg-slate-100",
        "dark:bg-slate-800",
        "dark:hover:bg-slate-900",
        "transition-all",
        "text-slate-800",
        "dark:text-white",
        "rounded-lg"
      )}
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};

export default ThemeToggle;
