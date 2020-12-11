import Card from "../Card";
import {useContext} from "react";
import AppContext from "../../context/AppContext";
import { initialCards, initialInventory } from "../../mockdata/CardData";

const Store = () => {
  
  const appsFullData = useContext(AppContext);

  const inventory = appsFullData.inventory;
  const cards = appsFullData.cards;
  const buyCard = appsFullData.buyCard;
  
  return (
    <div>
      <h2 className="title is-2">Store Inventory</h2>
      <div className="columns">
        {cards.map((card) => (
          <div key={card.id} className="column is-one-sixth">
            <button className="button" onClick={() => buyCard(card.id)}>
              <small>Buy ({inventory[card.id]} in stock)</small>
            </button>
            <Card imgUrl={card.imgUrl} content={card.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;