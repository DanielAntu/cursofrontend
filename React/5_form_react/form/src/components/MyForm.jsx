import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ username, useremail }) => {
    // gerenciamento de dados
    const [name, setName] = useState(username);
    const [email, setEmail] = useState(useremail);
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    // envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);
        // limpando valor
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

    console.log(name);
    console.log(email);

    return (
        <div>
            {/* Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        value={name || ""}
                        onChange={handleName}
                    />
                </div>
                {/* label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="Digite o seu e-mail"
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                {/* Textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea
                        name="bio"
                        placeholder="Descrição do usuario"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}></textarea>
                </label>
                {/* select */}
                <label>
                    <span>Função no sistema</span>
                    <select
                        name="role"
                        onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuario</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;
