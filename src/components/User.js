const User = ({user, handleClick}) => {
    return(
        <div onClick={()=>{handleClick(user)}}>
            <img alt={user.picture.medium} src={user.picture.medium}/>
            <span>{user.name.title}. {user.name.first} {user.name.last}</span>
        </div>
    )
}

export default User;