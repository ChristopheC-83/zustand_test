import { create } from "zustand";

export const useCharactersStore = create((set) => ({

  //  des données en dur pour tester
  characters: [
    {
      id: 1,
      nom: "kiki",
      pv: 90,
      pm: 25,
      side: "light",
      image:
        "https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_rpg/sorcier.jpg",
    },
    {
      id: 2,
      nom: "dulle",
      type: "sorcière",
      pv: 90,
      pm: 25,
      side: "light",
      image:
        "https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_rpg/magicienne.jpg",
    },
    {
      id: 3,
      nom: "crapaud",
      type: "orc",
      pv: 90,
      pm: 25,
      side: "dark",
      image:
        "https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_rpg/orc.jpg",
    },
    {
      id: 4,
      nom: "bouille",
      type: "dragon",
      pv: 90,
      pm: 25,
      side: "dark",
      image:
        "https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_rpg/dragon_epee.jpg",
    },
  ],
  setCharacters: (characters) => set({ characters }),

  // vide mais rempli par CharactersApiStore.jsx 
  charactersApi: null,
  setCharactersApi: (charactersApi) => set({ charactersApi }),
}));
