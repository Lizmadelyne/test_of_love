import { Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { QuizWoman } from "./pages/womanPage";
import { QuizMan } from "./pages/manPage";

const AppRouter = () =>{
 
return (
  <>
   
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/quiz-woman' element={<QuizWoman/>}/>
      <Route path='/quiz-man' element={<QuizMan/>}/>
        

 </Routes>
 </>
)
  
}

export { AppRouter };