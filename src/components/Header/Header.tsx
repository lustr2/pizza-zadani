import { useContext } from "react";
import { PrefsContext } from "../context/settings-context";


export const Header:React.FC = () => {

    const {setVegan} = useContext(PrefsContext);

    const handleChange = () => {
        setVegan(setVegan);
    }

    return (
        <>
           <header>
            <div className="pizza" />
            <h1>Build your own pizza</h1>
            <input type="checkbox" onChange={handleChange}>
                Show input vegan ingredients
            </input>
          </header>
        </>
    );
}