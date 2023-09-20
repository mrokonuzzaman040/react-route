import { Link } from "react-router-dom";

const User = ({ user }) => {
    const {id, name, email, phone} = user;
    return (
        <div className=" text-center bg-blue-400 mb-10 text-white rounded-xl p-4 m-2 w-auto">
            <h2 className="text-2xl">{name} <span>{id}</span></h2>
            <p>Email: {email}</p>
            <p>Phone:{phone}</p>
            <Link className="" to={`/user/${id}`}>Show all</Link>
        </div>
    );
};

export default User;