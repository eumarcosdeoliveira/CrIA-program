import './style.css';
import logo from '../../assets/logo.svg'
import forma01 from '../../assets/forma01.svg'
import { Link, Route } from 'react-router-dom';
import { AppRoutes } from '../../routes/AppRoutes';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';
import React, { useState } from 'react';




function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

    function handleSingnOut(e) {
      e.preventDefault();
      createUserWithEmailAndPassword(email, password);
    }

    if (loading){
      return <p>Carregando...</p>
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
            className='input' 
            type="email" 
            id="email" 
            name="email"  
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value) }/>
          </div>

          <div className='inputContainer'>
          <input 
          className='input' 
          type="password" 
          id="email" 
          name="senha" 
          placeholder='Senha'
          onChange={(e) => setPassword(e.target.value) }/>
        </div>


          <Link onClick={handleSingnOut} className='buttonC' to='/'>
          Cadastrar
          </Link>
        </form>
        <div className='footer'>
        <p className='naotem2'>Já tem uma conta?</p> <Link className='cadastro2' to='/'>Faça login</Link>

        </div>
      </div>
    </div>
    <img className='forma01' src={forma01} alt="Forma01" />
    <img className='forma02' src={forma01} alt="Forma02" />
    <img className='forma03' src={forma01} alt="Forma03" />
  </div>
}

export default Register;
