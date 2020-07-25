import React from 'react';
import './styles.css';
import { BsArrow90DegUp, BsArrow90DegDown } from 'react-icons/bs';
import { AiOutlineDollarCircle } from 'react-icons/ai';


const Home = () => {
  return (
    <div id="container">
      <header id="my-header">
        <img src="https://res.cloudinary.com/jvfaria015/image/upload/v1595360600/Vectormoney_j7ioal.png" alt="imageLogo" />
        <img id="logo-header" src="https://res.cloudinary.com/jvfaria015/image/upload/v1595615839/thesullbra_cg1bte.png" alt="tkb-logo" />
        <hr id="line"/>
         <h2>finances</h2>
      </header>
      <div id="box-content">
        <div id="box">
          <p>Entradas</p>
          <a>R$ 2500,00</a>
          <span><BsArrow90DegUp id="enter-icon" /></span>
        </div>
        <div id="box">
          <p>Saídas</p>
          <a>R$ 2000,00</a>
          <span><BsArrow90DegDown id="out-icon" /></span>
        </div>
        <div id="box">
          <p>Total</p>
          <a>R$ 500,00</a>
          <span><AiOutlineDollarCircle id="currency-icon" /></span>
        </div>
      </div>
      <main>
        <div id="low-content">
          <div id="low-content-title">
            <span>Título</span>
            <div id="title-group">
              <span>Preço</span>
              <span>Categoria</span>
              <span>Data</span>
            </div>
          </div>
          <div id="low-box">
            <div id="low-box-title">
              <a>Pagamento aluguel loja</a>
            </div>
            <div id="low-box-price">
              <a>R$ 1500,00</a>
            </div>
            <div id="low-box-category">
              <a>Saída</a>
            </div>
            <div id="low-box-date">
              <a>18/07/2020</a>
            </div>
          </div>
          <div id="low-box">
            <div id="low-box-title">
              <a>Compra de insumos </a>
            </div>
            <div id="low-box-price">
              <a>R$ 500,00</a>
            </div>
            <div id="low-box-category">
              <a>Saída</a>
            </div>
            <div id="low-box-date">
              <a>01/07/2020</a>
            </div>
          </div>
          <div id="low-box">
            <div id="low-box-title">
              <a>Recebimento pedidos feito no cartão</a>
            </div>
            <div id="low-box-price">
              <a>R$ 2500,00</a>
            </div>
            <div id="low-box-category">
              <a>Entrada</a>
            </div>
            <div id="low-box-date">
              <a>30/07/2020</a>
            </div>
          </div>
          <div id="low-box" />
          <div id="low-box" />
          <div id="low-box" />
          <div id="low-box" />
        </div>

        <button id="add-button">Adicionar</button>
      </main>
      <footer>
        <span>&copy; Desenvolvido por João Vitor de Faria</span>
      </footer>
    </div>
  );
};

export default Home;

