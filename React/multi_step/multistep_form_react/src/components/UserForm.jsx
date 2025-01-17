import React from "react";

const UserForm = ({ data, updatedFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome"
                    required
                    value={data.name || ""}
                    onChange={(e) =>
                        updatedFieldHandler("name", e.target.value)
                    }
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">E-mail:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    required
                    value={data.email || ""}
                    onChange={(e) =>
                        updatedFieldHandler("email", e.target.value)
                    }
                />
            </div>
        </div>
    );
};

export default UserForm;
