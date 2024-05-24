import React, { useContext, useState } from 'react';
import ITopping from "../../models/Topping";
import Topping from "../Topping";
import './style.css';
import { PrefsContext } from '../context/settings-context';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [checkedTopp, setCheckedTopp] = useState<ITopping[]>(toppings);
  const [totalPrice, seTotalPrice] = useState<number>(0);

  const {vegan} = useContext(PrefsContext);

  const handleCheckChange = (index:number, selected : boolean) => {
//    console.log('Jsme v ToppingSelected: ' + index + ', ' + selected);
    const vybrano = [...checkedTopp];
    vybrano[index].selected = selected;
    setCheckedTopp(vybrano); 
    selected ? seTotalPrice(oldPrice => Math.round((oldPrice + vybrano[index].price)*100)/100)
             : seTotalPrice(oldPrice => Math.round((oldPrice - vybrano[index].price)*100)/100);
  }

  const countTopp = checkedTopp.map(c => c.selected).reduce((prev, cur) => (cur ? prev + 1: prev ), 0 );

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {countTopp}, total price: {totalPrice} Euro</p>
    
      <div className="toppings">
        {toppings.filter((vegan) => vegan.vegan || !vegan).map((topping, index) => (
          <Topping topping={topping} key={topping.name} onToppingChange={selected => handleCheckChange(index, selected)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
