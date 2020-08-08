import React, { Component } from 'react'
import './styless.css';
export default class RegistroComponent extends Component {
    render() {
        return (
            <div className="container mt-lg-5">
                <div className="row d-flex justify-content-center">
                    <h2 className="mb-5 mt-3">Registrate</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm-5">
                        <form>
                            <div className="form-group row mb-2">
                                <div className="col-md-8">
                                    <div class="input-group mb-1">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon1"><span className="fa fa-user fa-lg"></span></span>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <div className="col-md-8">
                                    <div className="input-group mb-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><span className="fa fa-user fa-lg"></span></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Apellido" aria-label="Apellido" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <div className="col-md-8">
                                    <div className="input-group mb-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">@</span>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <div className="col-md-8">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1"><span className="fa fa-lock fa-lg"></span></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <button type="submit" className="btn">Registrar</button>
                                </div>
                            </div>
                            <div className="form-group row mb-2">
                                <div className="col-md-5 d-flex justify-content-center">
                                    <a href="/" role="button">Ya tienes una cuenta?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
