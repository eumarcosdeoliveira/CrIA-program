import './style-login.css';
import logo from '../../assets/logo.svg'
import forma01 from '../../assets/forma01.svg'
import { Link, Navigate } from 'react-router-dom';
import '../../routes/AppRoutes'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';



function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [signInWithEmailAndPassword,user, loading, error] = useSignInWithEmailAndPassword(auth);

    function handleSingnIn(e) {
      e.preventDefault();
      signInWithEmailAndPassword(email, password);
    }

    if (loading){
      return ( <div className='container'>
        <Spinner animation="border" variant="secondary" />
      </div>
        
      );
    }
    if (user){
      return <Navigate to="/home" />;
      
    }

  return <div className='container'>
    <div className='conntainerbox' >
      <header className='header'>
      
      </header>
      <img className='logo' src={logo} alt="Logo" />
      <div className='containerform'>
        <form className='form'>
          <div className='inputContainer'>
            <input 
            className='input1' 
            type="email" 
            id="email" 
            name="email"  
            placeholder='E-mail' 
            onChange={(e) => setEmail(e.target.value) }/>
          </div>

          <div className='inputContainer'>
          <input 
          className='input1' 
          type="password" id="email" 
          name="senha" 
          placeholder='Senha' 
          onChange={(e) => setPassword(e.target.value) }/>
        </div>

          <a className='esqueceu' href="#senha">Esqueceu sua senha?</a>

          <button className='button' onClick={handleSingnIn}>
          Entrar
          </button>
        </form>
        <div className='footer'>
          <p className='naotem1'>Não tem uma conta?</p> <Link className='cadastro1' to='/register'>Cadaste-se</Link>
          
        </div>
      </div>
    </div>
    <img className='forma01' src={forma01} alt="Forma01" />
    <img className='forma02' src={forma01} alt="Forma02" />
    <img className='forma03' src={forma01} alt="Forma03" />
  </div>
}

export default Login;
