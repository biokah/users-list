import Modal from "./Modal";

const User = ({user, handleClick}) => {
    return(
        <div className="rounded-full bg-green-200 flex gap-4 items-center my-3" onClick={()=>{handleClick(user)}}>
            <img alt={user.name.first} className="rounded-full" src={user.picture.medium}/>
            <span>{user.name.title}. {user.name.first} {user.name.last}</span>
        </div>
    )
}

export default User;