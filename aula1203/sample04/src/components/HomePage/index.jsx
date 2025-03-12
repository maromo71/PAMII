import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Home Page - Escolha o caminho</h1>
      <div className="conteudo-opcoes">
        <Link className="opcao-front-end" to="/front-end">
          Front-end
        </Link>
        <Link className="opcao-back-end" to="/back-end">
          Back-end
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
