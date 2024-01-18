import { useCharactersStore } from "./CharactersStore";
import { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import CardCharacter from "../components/CardCharacter";
import he from "he";
import Name from "../components/Name";

export default function CharactersApiStore() {
  const { characters, charactersApi, setCharactersApi } = useCharactersStore();

  const [apiState, setApiState] = useState({
    loading: false,
    error: false,
    data: undefined,
  });
  
// l'état de apiState est mis à jour à chaque fois que le composant est rendu
/il détermine si on affiche erreur/loader/données
  useEffect(() => {
    setApiState({ ...apiState, loading: true });
    fetch("https://myapis.barpat.fun/api_characters_rpg")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur : mauvaise ressource.");
        }
        return response.json();
      })
      .then((data) => {
        setApiState({ loading: false, error: false, data: data });
      })
      .catch((error) => {
        setApiState({ loading: false, error: true, data: undefined });
      });
  }, []);

  let content;
  if (apiState.loading) {
    content = (
      <ImSpinner9 className="mx-auto text-8xl text-amber-200 animate-spin" />
    );
  } else if (apiState.error) {
    content = (
      <div className="text-xl font-semibold text-red-500">
        <p>Une erreur est survenue.</p>
      </div>
    );
  } else if (apiState.data?.length > 0) {
    content = (
      <div>
        <h3 className="w-1/2 pb-4 m-8 mx-auto text-4xl text-center border-b-4 border-amber-100">
          Characters API
        </h3>
        <div className="flex flex-wrap gap-8">
          {apiState.data.map((character) => (
            <CardCharacter
              key={character.id}
              nom={he.decode(character.name)}
              image={character.avatar}
              pv={character.pv}
              pm={character.pm}
              side={character.side}
            />
          ))}
          <Name />
        </div>
      </div>
    );
    console.log(charactersApi); // Notez que charactersApi peut ne pas être immédiatement mis à jour ici
  } else if (apiState.data === 0) {
    content = (
      <div className="text-xl font-semibold text-green-500">
        <p>La requête ne correspond à aucune donnée.</p>
      </div>
    );
  } else {
    content = "un probleme ?";
  }

  useEffect(() => {
    if (apiState.data?.length > 0) {
      // Vérifiez si les données ont changé avant de mettre à jour le state
      if (JSON.stringify(characters) !== JSON.stringify(apiState.data)) {
        setCharactersApi(apiState.data);
      }
    }
  }, [apiState.data, characters, setCharactersApi]);

  return <div>{content}</div>;
}
