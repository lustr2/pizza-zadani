import Check from '../Check/Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onToppingChange: (checked:boolean) => void;
}

const Topping : React.FC<IToppingProps> = ({ topping, onToppingChange }) => {
//  const [checked, setChecked] = useState<boolean>(false);

  // const onChangeCheck = () => {
  //   setChecked(prevChecked => !prevChecked);
  //   topping.selected = !checked;
  //   onChange;
  // }

  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onToppingChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
