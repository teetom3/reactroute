import { useMatch } from "react-router";

export default function SearchHeader() {
  const match = useMatch("/categorie/:category");

  if (!match) return null;

  return <p>Catégorie : {match.params.category}</p>;
}
