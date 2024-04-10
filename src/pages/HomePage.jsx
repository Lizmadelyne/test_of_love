import { CategoryList } from "../componentes/CategoryList";
import { NavBar} from '../componentes/NavBar';


const HomePage = () =>{
 return(
    <div >
        <NavBar/>
        <div className="flex justify-center mt-6  text-gray-500">
        <h1 className="text-4xl font-bold">De:</h1>
        </div>
        
        <CategoryList/>

        
    </div>
 )

}

export { HomePage };