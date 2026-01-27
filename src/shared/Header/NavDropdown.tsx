import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import type { TNavItem } from "./navLinks";

type ItemProps = {
  item: TNavItem;
};

const NavDropdown = ({ item } : ItemProps) => {
  return (
    <div className="relative group">
      <button
        className="
          flex items-center gap-1
          text-[18px] font-normal
          hover:text-[#00AAA1]
          rounded-lg
          hover:rounded-lg
          focus:outline-none
        "
      >
        {item.label}
        <ChevronDown
          size={16}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {/* Dropdown */}
      <div
        className="
          absolute left-0 top-full z-50
          mt-3 w-48
          rounded-lg bg-white shadow-lg ring-1 ring-black/5 hover:rounded-lg
          invisible opacity-0 translate-y-2
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-200
        "
      >
        {item.children?.map((child) => (
          <Link
            key={child.href}
            to={child.href}
            className="
              block px-4 py-2 text-[18px]
              hover:bg-cyan-50 hover:text-[#00AAA1]
              hover:rounded-lg
              rounded-lg
              transition-colors
            "
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
