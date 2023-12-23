import './App.css';
import logo from './assets/logo.svg'
import forma01 from './assets/forma01.svg'
import { Link } from 'react-router-dom';




function App() {
  return <div className='container'>
    <div className='conntainerbox' >
      <header className='header'>
      
      </header>
      <img className='logo' src={logo} alt="Logo" />
      <div className='containerform'>
        <form className='form'>
          <div className='inputContainer'>
            <input className='input' type="text" id="email" name="email"  placeholder='Usuário'/>
          </div>

          <div className='inputContainer'>
          <input className='input' type="password" id="email" name="senha" placeholder='Senha'/>
        </div>

          <a className='esqueceu' href="#senha">Esqueceu sua senha?</a>

          <button className='button'>
          Entrar
          </button>
        </form>
        <div className='footer'>
          <p className='naotem'>Não tem uma conta?</p>
          <Link className='cadastro' to="/register">Cadastrar-se</Link>
        </div>
      </div>
    </div>
    <img className='forma01' src={forma01} alt="Forma01" />
    <img className='forma02' src={forma01} alt="Forma02" />
    <img className='forma03' src={forma01} alt="Forma03" />
  </div>
}

export default App;
