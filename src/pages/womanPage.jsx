import  { useState } from 'react';
import { RiHomeHeartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ResultModal } from '../componentes/Modal';

// Array de preguntas
const questions = [
  { id:1, text: '¿Te sientes feliz cuando estás con ella?' },
  { id:2, text: '¿Puedes imaginarte un futuro con ella?' },
  { id:3, text: '¿Te preocupa su bienestar y felicidad?' },
  { id:4, text: '¿Sientes mariposas en el estómago cuando piensas en ella?' },
  { id:5, text: '¿Te esfuerzas por hacerla feliz?' },
  { id:6, text: '¿Te sientes tranquilo y seguro cuando estás con ella?' },
  { id:7, text: '¿Comparten intereses y valores importantes?' },
  { id:8, text: '¿Sientes que puedes ser tú mismo alrededor de esa persona?' },
];

const QuizWoman = () => {
  const [answers, setAnswers] = useState(new Array(8).fill(false));
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Función para manejar la respuesta de una pregunta en particular
  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers]; // Crea una copia del array de respuestas
    newAnswers[index] = answer; // Actualiza la respuesta en el índice dado
    setAnswers(newAnswers); // Actualiza el estado de las respuestas
  };

  // Calcula el porcentaje de respuestas afirmativas
  const calculatePercentage = () => {
    const countTrue = answers.filter(answer => answer).length; // Cuenta el número de respuestas verdaderas
    return (countTrue / 8) * 100; // Calcula el porcentaje
  };

  return (
    <div className=" flex-col-1 justify-center text-center mb-2 p-3 relative  lg:grid grid-cols-3">
      <h2 className='flex flex-col font-bold text-rose-500 text-4xl p- md:mt-4 mb-6'>Preguntas para determinar si estás enamorado de ella:</h2>
      <ol>
        {/* Mapea sobre las preguntas */}
        {questions.map((question, index) => (
          <li className='mb-4 text-2xl' key={index}>
            {question.text}
            <div className='flex gap-3 justify-evenly'>
              {/* Botón Sí */}
              <button 
                className={`w-10 h-10 rounded-full text-lg hover:bg-sky-400
                ${answers[index] === true ? 'bg-sky-600' : 'bg-sky-300'}`}
                onClick={() => handleAnswer(index, true)}
              >
                Sí
              </button>
              {/* Botón No */}
              <button
                className={`w-10 h-10 rounded-full  text-lg hover:bg-gray-600
                ${answers[index] === true ? 'bg-gray-200' : 'bg-gray-400'}`}
                onClick={() => handleAnswer(index, false)}
              >
                No
              </button>
            </div>
          </li>
        ))}
      </ol>

      <div className='flex gap-20 justify-between p-7 md:justify-around md:mt-8' >
        <Link to='/'>
          <button className='center'>
            <RiHomeHeartLine size={30}/>
          </button>
        </Link>
        <button className='flex justify-center w-48 h-10 rounded-md bg-fuchsia-700 text-2xl text-white mx-6 lg:mb-1 hover:' onClick={() => setModalIsOpen(true)}>Ver resultado</button>
      </div>
   
      <ResultModal
        percentage={calculatePercentage()}
        isOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
    </div>
  );
};

export { QuizWoman };
