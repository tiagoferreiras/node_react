import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [telefone, setTelefone] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" />
                <label htmlFor="telefone">Telefone</label>
                <input value={telefone} onChange={(e) => setTelefone(e.target.value)} type="telefone" id="telefone" name="telefone" />
                <label htmlFor="email">Email</label>
                <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" />
                <label htmlFor="logradouro">Logradouro</label>
                <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} type="logradouro" id="logradouro" name="logradouro" />
                <label htmlFor="complemento">Complemento</label>
                <input value={complemento} name="complemento" onChange={(e) => setComplemento(e.target.value)} id="complemento" />
                <label htmlFor="uf">UF</label>
                <input value={uf} onChange={(e) => setUf(e.target.value)} type="Uf" id="Uf" name="UF" />
                <label htmlFor="cidade">Cidade</label>
                <input value={cidade} name="cidade" onChange={(e) => setCidade(e.target.value)} id="cidade" />
                <label htmlFor="cep">CEP</label>
                <input value={cep} onChange={(e) => setCep(e.target.value)} type="cep" id="cep" name="cep" />
                <button type="submit">Cadastrar</button>
                <div className="img">
                  <img src="dog.png" />
                </div>
            </form>
        </div>
    )
}