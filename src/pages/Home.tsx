import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import IllustrationImg from "../assets/images/illustration.svg";
import GoogleIconImage from "../assets/images/google-icon.svg";
import Logo from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { useAuth } from "../hooks/useAuth";

export const Home = () => {
	const history = useHistory();

	const { user, signInWithGoogle } = useAuth();

	const handleCreateRoom = async () => {
		if (!user) await signInWithGoogle();

		history.push("/rooms/new");
	};

	return (
		<div id="page-auth">
			<aside>
				<img
					src={IllustrationImg}
					alt="Ilustração de perguntas e respostas"
				/>
				<strong>Crie salas de Q&amp;A ao-vivo </strong>
				<p>Tire as dúvidas da sua audiência em tempo-real</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={Logo} alt="Letmeask" />
					<button className="create-room" onClick={handleCreateRoom}>
						<img src={GoogleIconImage} alt="Logo do Google" />
						Crie sua sala com o Google
					</button>
					<div className="separator">ou entre em uma sala</div>
					<form>
						<input
							type="text"
							placeholder="Digite o código da sala"
						/>
						<Button type="submit">Entrar na sala</Button>
					</form>
				</div>
			</main>
		</div>
	);
};
