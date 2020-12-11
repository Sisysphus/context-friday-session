// AKA <AppContextProvider />

import {useState} from "react";
import AppContext from "../../context/AppContext";
import { initialCards, initialInventory, initialDecks } from "../../mockdata/CardData";

const DataWrapper = ({ children }) => {

  const [applicationState, setApplicationState] = useState({
    inventory: initialInventory,
    decks: initialDecks
  });

  return (
    <AppContext.Provider value={{
        cards: initialCards,
        decks: applicationState.decks,
        inventory: applicationState.inventory,
        buyCard: (cardId) => {
            const myDeck = applicationState.decks[0];
            myDeck.cards.push(initialCards.find(card => card.id === cardId));
            applicationState.inventory[cardId]--;
            setApplicationState({
                decks: [myDeck, applicationState.decks[1]],
                inventory: applicationState.inventory
            });
        }
    }}>
        {children}
    </AppContext.Provider>
  );
};

export default DataWrapper;
