import { ThemeButton } from "../themeButton/ThemeButton";

export function Header() {
  return (
    <header className="w-full h-20 shadow-md px-4 bg-pure-white dark:bg-deep-navy">
      <div className="h-full container mx-auto p-2 flex justify-between items-center flex-wrap">
        <p className="font-bold text-xs sm:text-base lg:text-xl text-charcoal-black dark:text-pure-white">Where in the world?</p>
        <ThemeButton />
      </div>
    </header>
  );
};