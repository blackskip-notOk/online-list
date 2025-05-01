import { Link } from "@tanstack/react-router";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <div className={className}>
    <div>LOGO</div>
    <nav >
      <Link to="/">Мои персонажи</Link>
      <Link to="/spells">spells</Link>
    </nav>
      <div>PROFILE</div>
      </div>
  );
};
