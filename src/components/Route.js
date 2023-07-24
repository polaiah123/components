// import { useContext } from "react";
// import NavigationContext from "../Context/navigation";
import useNavigation from "../hooks/use-navigation";

function Route ( {path , children} ) {

const {currentPath} = useNavigation();

if (currentPath === path){

    return children; 

}

return null;

}

export default Route;