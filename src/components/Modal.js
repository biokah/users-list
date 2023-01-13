
import { MdClose } from "react-icons/md";
const Modal = () => {
    return(
        <div className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
            <div className="bg-gray-500 opacity-50 w-full h-full"></div>
            <div className="modal top-1/2 left-1/2 bg-white text-black absolute t-50 l-50">
                <button className="ml-auto block m-4"><MdClose/></button>
                <article className="flex gap-2 justify-center flex-col p-10 text-center">
                    <img alt="modal" src="http://placekitten.com/300/200" />
                    <span className="font-bold">Nombre completo</span>
                    <span>Gender</span>
                    <span>Email</span>
                    <span>Telefono</span>
                </article>
            </div>
        </div>
        
    )
}

export default Modal;