import { ThemeButton } from "../themeButton/ThemeButton";

export function Header() {
  return (
    <header className="w-full h-20 shadow-md px-4">
      <div className="h-full container mx-auto p-2 flex justify-between items-center flex-wrap">
        <p className="font-bold text-xs sm:text-base lg:text-xl">Where in the world?</p>
        <ThemeButton />
      </div>
    </header>
  );
};