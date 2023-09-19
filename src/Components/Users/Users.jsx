import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h2>users are here: {users.length}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between">
                {users.map(user => <User key={user.id} user={user}></User> )}
            </div>
        </div>
    );
};

export default Users;