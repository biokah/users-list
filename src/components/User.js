import userEvent from "@testing-library/user-event";

const User = ({ user, handleClick }) => {
  return (
    <div
      onClick={() => {
        handleClick(user);
      }}
    >
      <img src={user.picture.medium}></img>
      <span>
        {user.name.title}.{user.name.first}
        {user.name.last}
      </span>
    </div>
  );
};

export default User;
