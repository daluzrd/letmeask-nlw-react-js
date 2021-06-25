import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../components/Button";
import IllustrationImg from "../assets/images/illustration.svg";
import Logo from "../assets/images/logo.svg";
import "../styles/auth.scss";

export const NewRoom = () => {
	const history = useHistory();
	const { user } = useAuth();

	useEffect(() => {
		if (!user) history.push("/");
	}, [user]);

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
				<h2></h2>
				<div className="main-content">
					<img src={Logo} alt="Letmeask" />
					<h2>Criar uma nova sala</h2>
					<form>
						<input type="text" placeholder="Nome da sala" />
						<Button type="submit">Criar sala</Button>
					</form>
					<p>
						Quer entrar em uma sala existente?{" "}
						<Link to="/">Clique aqui</Link>
					</p>
				</div>
			</main>
		</div>
	);
};
