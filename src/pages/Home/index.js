import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
        })
        .catch(() => {
          console.log("Erro ao logar");
        });
    } else {
      alert("Preencha tudo");
    }
  }

  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <span>Organize suas tarefas diárias</span>

      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Acessar</button>
      </form>

      <Link className="button-link" to="/register">
        Não possue uma conta? Cadastre-se aqui
      </Link>
    </div>
  );
}
