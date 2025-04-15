import { List } from "@phosphor-icons/react";

const TopNav = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 px-6 py-4 flex justify-between items-center">
      <List size={28} className="text-white" />

      <nav className="flex space-x-6 text-lg font-light">
        <a href="#home" className="hover:underline text-white">
          Home
        </a>
        <a href="#about" className="hover:underline text-white">
          About Me
        </a>
        <a href="#intro" className="hover:underline text-white">
          Introduction
        </a>
        <a href="#category" className="hover:underline text-white">
          Category
        </a>
        <a href="#contact" className="hover:underline text-white">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default TopNav;
