import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Password: '',
      // isAdmin: false,
    }
    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }

  Email(event) {
    this.setState({ Email: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }

  login() {
    console.log('Envio de parametros');
    console.log(this.state.Email);
    console.log(this.state.Password);

    fetch('https://aura-service.herokuapp.com/api/user/autenticar', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: this.state.Email,
        contrasenia: this.state.Password
      })
    }).then((Response) => Response.json())
        .then((result) => {
          console.log(result);
          if (result.message === `No existe el usuario: ${this.state.Email}`)
            alert('Usuario Invalido');
          else
          if(result.user.admin)
            this.setState({ isAdmin: true})

          window.location.href = 'http://localhost:3000/';
        })
  }

  render() {
    return (
      <div className="login">
        <div className="logo">
          <img src="https://externalstorageaccount.blob.core.windows.net/recursos/img/auralogo.png" alt="logo" />
        </div>
        <div className="user">
          <label className="login-label-user" ><b>Usuario</b></label>
          <br/>
          <input
           onChange={this.Email}
           className="login-input"
           type="text"
           placeholder="Ingrese su correo electronico"
           required
          />
        </div>
        <br/>
        <div className="pass">
          <label className="login-label-pass" ><b>Contraseña</b></label>
          <br/>
          <input
            onChange={this.Password}
            className="login-input"
            type="password"
            placeholder="Ingrese su Contraseña"
            required
          />
        </div>

        <button onClick={this.login} className="btn-login" type="submit">
          Ingresar
        </button>
        <br/>
        <div className="btn-forgot-pass" >
          <NavLink to="/forgot-pass"> Restaurar Contraseña</NavLink>
        </div>
      </div>
    );
  }
}

export default Login;
