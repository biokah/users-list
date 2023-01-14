const Modal = ({user, handleClick, handleChange}) => {
    return(
        <div onChange={(event)=> handleChange(event)} className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
            <div className="modal is open top-1/2 left-1/2 bg-white text-black absolute t-50 l-50">
                <button onClick={e =>{this.Modal()}} className="modal-close ml-auto block">x</button>
                <article onClick={handleClick} className="flex justify-center flex-col p-10">
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