import { useEffect} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const useDarkMode = () => {
    const [ value, setValue ] = useLocalStorage("");

    useEffect(() => {

        if(value) {
            document.body.classList.add("dark-mode");
        } else { 
            document.body.classList.remove("dark-mode");
        }
    }, [value]);
    return [ value, setValue ];
};

export default useDarkMode;