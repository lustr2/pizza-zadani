import { PrefsContext } from '../context/settings-context';
import './style.css';
import { useContext } from 'react';

interface ICheck {
  checked : boolean;
  onChange : (value : boolean) => void;
}
// prejmenovala jsem props check -> checked (i v interface ICheck)
const Check : React.FC<ICheck> = ({ checked , onChange})  => {
//  const [checked, setChecked] = useState<boolean>(false);

const {vegan} = useContext(PrefsContext);

  const handleClick = () => {
    // setChecked(!checked);
    onChange(!checked);
  };

  return (
    <button
      className={vegan ? "check" : "check--disabled"}
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
