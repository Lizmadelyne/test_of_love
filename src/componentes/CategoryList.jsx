import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";



const CategoryList = ()=>{

    return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
         <Link to='/quiz-man'>
         <button
            className={`flex justify-center w-48 h-16 rounded-md p-4 bg-sky-200 hover:bg-sky-400`}
            >
            <FaMale size={30} />
            <h1 className=" font-bold text-4xl text-gray-500">El</h1>
            </button > 
         </Link>
         <Link to={`/quiz-woman`}>
         <button
            className={`flex justify-center w-48 h-16 rounded- p-4 bg-pink-200 hover:bg-pink-400`}
            >
            <FaFemale size={30} />
            <h1 className=" font-bold text-4xl text-gray-500">Ella</h1>
            </button > 
         </Link>
  

         
             
          
     </div>
    )
}
export { CategoryList };