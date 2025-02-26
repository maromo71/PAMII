import { useState } from "react"
import "./style.css"

function Home() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0)

  function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 100 - 1) + 1
    setNumeroAleatorio(numero)
  }
  return (
    <div className="conteudo-centralizado">
      <h2>Número Aleatório</h2>
      <h1>{numeroAleatorio}</h1>
      <div className="area-botao">
        <label>Clique para gerar um número aleatório</label>
        <button onClick={gerarNumeroAleatorio}>Gerar Número</button>
      </div>
    </div>
  );
}
export default Home;
