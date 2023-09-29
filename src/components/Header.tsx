"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { Button } from "./ui/button";
import Container from "./ui/container";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="border-b px-4 py-3 sm:flex sm:justify-between">
      <Container>
        <div className="relative flex h-12 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">FREEdium</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <MenuButton />
            <div className="mx-6 hidden items-center space-x-4 md:block lg:space-x-6">
              <Button asChild variant="ghost">
                <Link href="#">Buy me a Coffee</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
