import { Link } from "react-router-dom";
import { useState } from "react";

export const Register = () => {

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 p-0">
          <img src="https://picsum.photos/id/237/800/800" class="img-fluid" alt="Responsive image"
            id="imagem-lateral" />
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center formulario">
          <form>
            <h2>Formulário de Cadastro</h2>
            <div class="form-group">
              <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" />
            </div>
            <div class="form-group">
              <input type="tel" class="form-control" id="telefone" placeholder="Telefone" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" id="email" placeholder="Email" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="cep" placeholder="CEP" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="logradouro" placeholder="Logradouro" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="numero" placeholder="Número" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="complemento" placeholder="Complemento" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="bairro" placeholder="Bairro" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="cidade" placeholder="Cidade" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="uf" placeholder="UF" />
            </div>
            <div class="form-group">
              <label for="tipo-cliente">Tipo de Cliente:</label><br />
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="tipo-cliente" id="padrao" value="padrao" />
                <label class="form-check-label" for="padrao">Padrão</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="tipo-cliente" id="preferencial"
                  value="preferencial" />
                <label class="form-check-label" for="preferencial">Preferencial</label>
              </div>
            </div>
            <div class="text-center mb-2">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
            <div class="text-center">
              <div class="d-flex flex-column align-items-center">
                <div class="input-group mb-3">
                  <label for="busca-id" class="sr-only">Buscar por ID</label>
                  <input type="text" class="form-control" id="busca-id" placeholder="Buscar por ID" />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-primary">Buscar</button>
                  </div>
                </div>
                <div class="input-group mb-3">
                  <label for="busca-email" class="sr-only">Buscar por Email</label>
                  <input type="text" class="form-control" id="busca-email" placeholder="Buscar por Email" />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-primary">Buscar</button>
                  </div>
                  <div class="input-group">
                    <br />
                    Voltar para{"   "}
                    <Link className="ml-2 mt-4" to="/login">
                      página de Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}