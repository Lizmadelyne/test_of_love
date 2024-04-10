import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";




const ResultModal = ({ percentage, isOpen, closeModal }) => {
  return (
    <Modal
    className=' border-none flex justify-center relative '
    isOpen={isOpen} 
    onRequestClose={closeModal}
    >
   <div className=" modalContainere flex flex-col  w-72 h-80 border-2 border-sky-800 rounded-lg absolute top-24 bg-white shadow-md" >
        <div className="flex justify-end">
          <Link to='/'>
          <button onClick={closeModal} className="bg-sky-300 hover:bg-sky-400 rounded-full mt-2">
          <IoIosCloseCircleOutline size={30}/>
        </button>
          </Link>
      </div>
      <div className="flex justify-center p-4 mt-6">
        <h2 className=" text-4xl text-fuchsia-600  mb-0">
          Estas el <strong>{percentage}% enamorada...</strong>
        </h2>
        <div>

        </div>
      </div>

    </div>
     
    </Modal>
  );
};
///
ResultModal.propTypes = {
  percentage: PropTypes.number.isRequired, // Espera un número y es obligatorio
  isOpen: PropTypes.bool.isRequired, // Espera un booleano y es obligatorio
  closeModal: PropTypes.func.isRequired // Espera una función y es obligatorio
};

export { ResultModal };
