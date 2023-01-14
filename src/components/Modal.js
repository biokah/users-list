const Modal = (user) => {
    return(
        <div className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
            <div className="modal top-1/2 left-1/2 bg-white text-black absolute t-50 l-50">
                <button className="ml-auto block">x</button>
                <article className="flex justify-center flex-col p-10">
                    <img alt="modal" src={user.picture.medium}/>
                    <span>Nombre completo: {user.name.first} {user.name.last}</span>
                    <span>Gender: {user.gender}</span>
                    <span>Email: {user.email}</span>
                    <span>Telefono: {user.phone}</span>
                </article>
            </div>
        </div>
        
    )
}

export default Modal;