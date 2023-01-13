const Modal = () => {
    return(
        <div className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
            <div className="modal top-1/2 left-1/2 bg-white text-black absolute t-50 l-50">
                <button className="ml-auto block">x</button>
                <article className="flex justify-center flex-col p-10">
                    <img alt="modal" src="http://placekitten.com/300/200" />
                    <span>Nombre completo</span>
                    <span>Gender</span>
                    <span>Email</span>
                    <span>Telefono</span>
                </article>
            </div>
        </div>
        
    )
}

export default Modal;