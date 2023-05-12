import React, { useState } from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="seuemail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Entrar</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Não é cadastrado?Se cadastre.</button>
            {/* aqui é onde está ocorrendo a mudança do formulario
            ao clicar no botão, a função é chamada e passa como argumento o 'signUp' e assim ela 
            é responsável por fazer a mudança entre os formulários*/}
            <div className="img">
                <img src="dog.png" id="png" />
            </div>
        </div>
    )
}