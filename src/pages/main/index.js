import React from "react";
import Layout from "../Layout";
import BoxMenu from "../../components/boxMenu";
import menu from "../../contants/menu";

const Main = () => {
  return (
    <Layout>
      <main className="main-home">
        <h1 className="title-home">
          <span>Oi, eu sou o Portal da Tok&Stok</span>
          <br />
          <span>
            A sua loja de móveis e acessórios para casa e escritório. Decoração
            com design e exclusividade a preços acessíveis!
          </span>
        </h1>
        <div className="container-home">
          {menu.map((item, key) => (
            <span key={key}>
              <BoxMenu item={item} />
            </span>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Main;
