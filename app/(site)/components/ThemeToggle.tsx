"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cx from "classnames";
import { Sun, Moon } from "@carbon/icons-react";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentTheme = useTheme().resolvedTheme;

  const toggleTheme = (current: string | undefined) => {
    current === "dark" ? setTheme("light") : setTheme("dark");
  };

  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={(e) => toggleTheme(currentTheme)}
      className={cx(className)}
      aria-label={`Toggle ${currentTheme === "dark" ? "light" : "dark"} mode`}
      title={`Toggle ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      {currentTheme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
