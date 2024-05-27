import React, { useContext, useState, useEffect } from 'react';
import ITopping from "../../models/Topping";
import Topping from "../Topping/Topping";
import './style.css';
import { PrefsContext } from '../context/settings-context';

interface IToppingsSelectProps {
  toppings: ITopping[];
  totalPrice : number;
  totalSum:  (n:number) => void;
  }

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings , totalPrice, totalSum}) => {
  const [checkedTopp, setCheckedTopp] = useState<ITopping[]>(toppings);
//  const [totalPrice, seTotalPrice] = useState<number>(0); // posunuto o uroven vyse

  const {vegan} = useContext(PrefsContext);

  const handleCheckChange = (index:number, selected : boolean) => {
//    console.log('Jsme v ToppingSelected: ' + index + ', ' + selected);
    const vybrano = [...checkedTopp];
    vybrano[index].selected = selected;
    setCheckedTopp(vybrano); 
    selected ? totalSum (Math.round((vybrano[index].price)*100)/100)
             : totalSum(Math.round((-vybrano[index].price)*100)/100);
//    selected ? seTotalPrice(oldPrice => Math.round((oldPrice + vybrano[index].price)*100)/100)
//             : seTotalPrice(oldPrice => Math.round((oldPrice - vybrano[index].price)*100)/100);
  }

  const countTopp = checkedTopp.map(c => c.selected).reduce((prev, cur) => (cur ? prev + 1: prev ), 0 );

  useEffect(() => {
    try {
      if (vegan) {
//        console.log("Prepocitame celkovou cenu");
        toppings.map(t => totalSum( 
                          ( vegan ? ((t.selected && !t.vegan)? -t.price : 0) : 0)));
//        toppings.map(t => seTotalPrice((oldTotalPrice) => 
//                          ( vegan ? ((t.selected && !t.vegan)? oldTotalPrice-t.price : oldTotalPrice) : oldTotalPrice)));
      }
    } catch (ex) {
        return console.log("Chyba pri prepocitame celkovou cenu" + ex);
    }
  }, [vegan]);
    
     
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {countTopp}, total price: {totalPrice} Euro</p>
    
      <div className="toppings">
      {toppings.map((topping, index) => (
        (!vegan) ? 
          <Topping topping={topping} key={topping.name} onToppingChange={selected => handleCheckChange(index, selected)}/>
              :
           // zobraz jen veganske toppings
           (topping.vegan) && 
            <Topping topping={topping} key={topping.name} onToppingChange={selected => handleCheckChange(index, selected)}/>
         ))
      }

        {/* {toppings.filter((vegan) => vegan.vegan || !vegan).map((topping, index) => (
          <Topping topping={topping} key={topping.name} onToppingChange={selected => handleCheckChange(index, selected)}/>
        ))} */}
      </div>
    </>
  );
};

export default ToppingsSelect;

// function useEffect(arg0: () => void, arg1: boolean[]) {
//   throw new Error('Function not implemented.');
// }

