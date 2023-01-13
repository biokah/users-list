

const User = ({user,handleClick}) => {
    return(
        <div onClick={()=>{handleClick(user)}}>
            <img src={user.picture.medium} alt="Imagen de usuario"/>
            <span>{user.name.title}. {user.name.first} {user.name.last}</span>
        </div>
    )
}

export default User;