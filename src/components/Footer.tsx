import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full border-t border-gray-200 bg-white p-2 shadow dark:border-gray-600 dark:bg-[#0c111c] md:flex md:items-center md:justify-center">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        Made with ❤️ by
        <Button asChild variant="link">
          <Link href="https://github.com/ReuelNixon">Reuel Nixon</Link>
        </Button>
      </span>
    </footer>
  );
};

export default Footer;
