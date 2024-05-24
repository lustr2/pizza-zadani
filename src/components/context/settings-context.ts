import { createContext } from "react";

interface PrefData {
    vegan: boolean;
}

interface PrefDataSettings extends PrefData {
    setVegan : (vegan:boolean) => void;
}
export const PrefsContext  = createContext<PrefDataSettings>
    ({
        vegan: true,
        setVegan: ()=> {},
    });