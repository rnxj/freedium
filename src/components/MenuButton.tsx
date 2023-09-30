import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const MenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>More</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Button asChild variant="ghost">
            <Link href="https://www.buymeacoffee.com/reuelnixon">Buy me a Coffee</Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuButton;
