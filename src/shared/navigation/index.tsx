import { Link } from "@tanstack/react-router";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Мои персонажи</Link>
      <Link to="/spells">spells</Link>
    </nav>
  );
};
