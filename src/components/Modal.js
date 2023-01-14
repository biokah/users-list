
const Modal = ( toggleModal, selectedUser) => {
    return(
        <div className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
            <div className="modal top-1/2 left-1/2 bg-white text-black absolute t-50 l-50">
                <button className="ml-auto block" onClick={toggleModal}>x</button>
                <article className="flex justify-center flex-col p-10">
                    <img alt="modal" src={selectedUser.picture.medium}/>
                    <span>Nombre completo: {selectedUser.name.first} {selectedUser.name.last}</span>
                    <span>Gender: {selectedUser.gender}</span>
                    <span>Email: {selectedUser.email}</span>
                    <span>Telefono: {selectedUser.phone}</span>
                </article>
            </div>
        </div>
        
    )
}

export default Modal;