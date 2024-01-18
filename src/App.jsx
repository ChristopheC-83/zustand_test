import CardCharacter from "./components/CardCharacter";
import Name from "./components/Name";
import CharactersApiStore from "./store/CharactersApiStore";
import { useCharactersStore } from "./store/CharactersStore";

export default function App() {
  const { characters, charactersApi } = useCharactersStore();

  return (
    <div className="container max-w-[1100px] mx-auto">
      <h1 className="w-1/2 pb-4 m-8 mx-auto text-4xl text-center border-b-4 border-amber-100 ">
        Zustand
      </h1>

      <div className="flex flex-wrap gap-8">
        {/* etape 1 */}
        {/* Valeur en dur pour créer la carte */}
        {/* <div className="border-4 rounded-xl border-amber-100 w-[300px] h-[500px] shadow-xl flex flex-col ">
          <img
            src="https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_rpg/magicien_glace.jpg"
            className="object-cover h-3/5"
          />
          <div className="flex flex-col p-4 gap-y-4 h-2/5 bg-slate-900">
            <h4 className="text-xl font-semibold">
              Nom : <span className="no-underline">Kiki</span>
            </h4>
            <h4 className="text-xl font-semibold">
              Santé : <span className="no-underline">90</span> PV
            </h4>
            <h4 className="text-xl font-semibold">
              Magie : <span className="no-underline">25</span> PM
            </h4>
            <h4 className="text-xl font-semibold">
              Côté : <span className="no-underline">Lumière</span>
            </h4>
          </div>
        </div> */}

        {/* etape 2 */}
        {/* les cartes avec infos en dur du store */}

        {characters.map((character) => (
          <CardCharacter
            key={character.id}
            nom={character.nom}
            image={character.image}
            pv={character.pv}
            pm={character.pm}
            side={character.side}
          />
        ))}
      </div>
      {/* etape 3 */}
      <CharactersApiStore />
      {/* tests pour voir lien avec store */}
      {/* {charactersApi?.length > 0 && <p>{charactersApi[1].name}</p>} */}
      {/* <Name/> */}
    </div>
  );
}
