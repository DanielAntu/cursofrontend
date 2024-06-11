import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 31 },
        { id: 2, name: "Pedro", age: 20 },
        { id: 3, name: "João", age: 19 },
    ]);

    const deleteRandom = () => {
        const randomUser = Math.floor(Math.random() * 4);

        setUsers((prevUser) =>
            prevUser.filter((user) => randomUser !== user.id)
        );
    };

    return (
        <div>
            {/* render sem key */}
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            {/* render com key */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
            {/* previous state */}
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender;
