import './style.css';

interface ICheck {
  checked : boolean;
  onChange : (value : boolean) => void;
}
// prejmenovala jsem props check -> checked (i v interface ICheck)
const Check : React.FC<ICheck> = ({ checked , onChange})  => {
//  const [checked, setChecked] = useState<boolean>(false);

//const {vegan, setVegan} = useContext(PrefsContext);

  const handleClick = () => {
    // setChecked(!checked);
    onChange(!checked);
//    setVegan(!vegan);
  };

  return (
    <button
      className='check'
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
