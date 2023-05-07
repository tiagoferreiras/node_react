import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 p-0">
          <img src="https://picsum.photos/id/237/800/800" class="img-fluid" alt="Responsive image"
            id="imagem-lateral" />
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center formulario">
          <form>
            <h2>Login</h2>
            <div class="form-group">
              <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Email" />
            </div>
            <div class="text-center mb-2">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div>
              <p>
                Ir para a{" "}
                <Link className="mt-4" to="/register">
                  página de Cadastro
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}