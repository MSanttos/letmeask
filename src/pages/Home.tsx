import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import { TestContext } from '../App' 

import '../styles/auth.scss'

export function Home(){
  const navigate = useNavigate()
  const value = useContext(TestContext)

  function handleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider()

    // abre o login do Google como um POPUP
    auth.signInWithPopup(provider).then(result => {
      console.log(result)

    //realiza o redirecionamento para a página de criação de sala
      navigate('/rooms/new')

    })
  }

  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo.</strong>
        <p>Tire suas dúvidas em tempo-real.</p>
      </aside>
      <main>
        {/* Debug */}
        {/* <h1>{value}</h1> */}
        <div className="main-content">
          <img src={logoImg} alt="Letmeask"/>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Google"/>
            Crie sua sala com o Google
          </button>
          <div className="separator">--------- ou entre em uma sala ---------</div>
          <form>
            <input
              type="text"
              placeholder="Código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}