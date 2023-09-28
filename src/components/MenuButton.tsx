import { Menu } from "lucide-react";
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
          Buy Me a Coffee
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuButton;
