
import { useContext } from "react";
import { PrefsContext } from "../context/settings-context";


export const Header:React.FC = () => {

    const {vegan, setVegan} = useContext(PrefsContext);

    const handleChange = () => {
//        console.log('BUdeme nastavovat zmenu vegana... ted je:' + vegan);
        setVegan(!vegan);
    }

    return (
        <>
           <header>
            <div className="pizza" />
            <h1>Build your own pizza</h1>
            <label>
                <input type="checkbox" onChange={handleChange} />
                    Show input vegan ingredients
            </label>
          </header>
        </>
    );
}