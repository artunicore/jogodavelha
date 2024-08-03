import { useState } from "react";
import Quadrado from "./quadrado";
import "./estilos.css";
function Board() {
  const [quadrados, setQuadrados] = useState(Array(9).fill(null));

  const [ehXis, setEhXis] = useState(true);

  const handleClick = (i) => {
    if (verificarVencedor(quadrados) || quadrados[i]) {
      return;
    }
    quadrados[i] = ehXis ? "X" : "O";
    setQuadrados(quadrados);
    setEhXis(!ehXis);
    console.log("clicou");
  };
  let status;
  const vencedor = verificarVencedor(quadrados);

  if (vencedor) {
    status = `Vencedor ${vencedor}`;
  } else {
    status = `Proximo jogador ${ehXis ? "X" : "O"}`;
  }
  return (
    <>
      <h1>Jogo da velha</h1>
      <div className="board">
        <div className="board-row">
          <Quadrado value={quadrados[0]} onClick={() => handleClick(0)} />
          <Quadrado value={quadrados[1]} onClick={() => handleClick(1)} />
          <Quadrado value={quadrados[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Quadrado value={quadrados[3]} onClick={() => handleClick(3)} />
          <Quadrado value={quadrados[4]} onClick={() => handleClick(4)} />
          <Quadrado value={quadrados[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Quadrado value={quadrados[6]} onClick={() => handleClick(6)} />
          <Quadrado value={quadrados[7]} onClick={() => handleClick(7)} />
          <Quadrado value={quadrados[8]} onClick={() => handleClick(8)} />
        </div>
        <h4 className="status">{status}</h4>
        <h3>quem perde eh gae</h3>
      </div>
    </>
  );
}

function verificarVencedor(quadrados) {
  const padraoVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < padraoVitoria.length; i++) {
    const [a, b, c] = padraoVitoria[i];
    if (
      quadrados[a] &&
      quadrados[a] === quadrados[b] &&
      quadrados[a] === quadrados[c]
    ) {
      return quadrados[a];
    }
  }
  return null;
}

export default Board;
