import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './styless.css';

class LoginComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm-5">
                        <form>
                            <div className="form-group row">
                                <img id="logo" src='assets/20200717_194608.png' />
                            </div>
                            <div className="form-group row d-flex justify-content-center">
                                <h2>¡My Notes!</h2>
                            </div>
                            <div className="form-group row d-flex justify-content-start ml-2">
                                <h4>Login</h4>
                            </div>
                            <div className="form-group row mb-1">
                                <div className="col-md-8">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1">@</span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-8">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><span className="fa fa-lock fa-lg"></span></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-block">Ingresar</button>
                                </div>
                                <div className="col-12 d-flex justify-content-center">
                                    <a href="#" role="button">¿Olvidaste la contraseña?</a>
                                </div>
                                <div className="col-12  d-flex justify-content-center">
                                    <a href="/d" role="button">Registrarse</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;