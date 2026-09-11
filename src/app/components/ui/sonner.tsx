"use client";

import { Toaster as Sonner, ToasterProps } from "sonner";
import { useTheme } from "../../context/ThemeContext";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group [--normal-bg:var(--popover)] [--normal-border:var(--border)] [--normal-text:var(--popover-foreground)]"
      {...props}
    />
  );
};

export { Toaster };
