const Modal = ({ user, toggleModal }) => {
  return (
    <div className="fixed inset-0 w-full max-h-screen overflow-hidden modal-wrapper">
      <div
        className="modal top-1/2 left-1/2 bg-white text-black absolute t-50 l-50"
        // onClick={() => {
        //   toggleModal();
        // }}
      >
        <button className="ml-auto block" onClick={toggleModal()}>
          x
        </button>
        <article className="flex justify-center flex-col p-10">
          <img alt="modal" src="http://placekitten.com/300/200" />
          <span>{user.name}</span>
          <span>{user.gender}</span>
          <span>{user.email}</span>
          <span>{user.phone}</span>
        </article>
      </div>
    </div>
  );
};

export default Modal;
