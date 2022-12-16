import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="container">
      <h1 className="title">CONTATO</h1>

      <form className="form" onSubmit={() => {}}>
        <input 
          className="input"
          type="name"
          name="name"
          placeholder="Digite seu nome"
          autoComplete='off'
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="email"
          name="email"
          placeholder="Digite seu email"
          autoComplete='off'
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          autoComplete='off'
          cols={30}
          rows="10"
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
