/* eslint-disable react/prop-types */
import "./estilos.css";

function Quadrado({ value, onClick }) {
  // Desestruturando props para obter 'value'
  return (
    <>
      <button className="quadrado" onClick={onClick}>
        {value}
      </button>
    </>
  );
}

export default Quadrado;
