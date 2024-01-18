import { useCharactersStore } from "../store/CharactersStore";
// pour décoder les caractères spéciaux avec "npm install he" he pour htmlentities
import he from "he";

export default function Name() {
  const { charactersApi, setCharactersApi } = useCharactersStore();

  function atk() {
    // Copiez le tableau charactersApi pour éviter la mutation directe de l'état
    const updatedCharacters = [...charactersApi];

    // Réduisez de 10 points de vie au 6ème personnage
    updatedCharacters[6].pv -= 10;

    // Mettez à jour l'état avec le nouveau tableau
    setCharactersApi(updatedCharacters);
  }

  return (
    <div>
      {charactersApi?.length > 0 &&
        charactersApi.map((character) => (
          <p key={character.id}>{he.decode(character.name)}</p>
        ))}
      <button onClick={() => atk()} className="btn">
        atk
      </button>
    </div>
  );
}
