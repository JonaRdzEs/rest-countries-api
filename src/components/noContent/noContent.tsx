import type { ReactNode } from "react";
import { Link } from "../link/Link";

interface Props {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  withButton?: boolean;
}

export function NoContent({ children, icon, title, withButton = false }: Props) {
  return (
    <div className="h-[80vh] m-auto flex justify-center items-center gap-5 flex-col p-3">
      {icon}
      <h1 className="text-3xl font-bold text-charcoal-black text-center">
        {title}
      </h1>
      {children}
      {withButton && (
        <Link path="/" className="p-5">
          Go to home page
        </Link>
      )}
    </div>
  );
}
