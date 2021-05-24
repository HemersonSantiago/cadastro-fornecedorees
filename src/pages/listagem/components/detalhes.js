import React from "react";
import { Drawer } from "antd";

const DetalhesDrawer = ({ visivel, fecharDrawer, item }) => {
  return (
    <Drawer
      title={<h2>DETALHES DO FORNECEDOR</h2>}
      placement="right"
      closable={true}
      onClose={fecharDrawer}
      visible={visivel}
      width={"50%"}
    >
      {item && (
        <div className="container-info">
          <div className="width-full">
            <div className="line-info">
              <div className="info">
                <p className="title-info">Nome</p>
                <p className="content-info">{item.nome}</p>
              </div>
              <div className="info">
                <p className="title-info">Segmento</p>
                <p className="content-info">{item.segmento}</p>
              </div>
            </div>
            <div className="line-info">
              <div className="info">
                <p className="title-info">Razão social</p>
                <p className="content-info">{item.razaoSocial}</p>
              </div>
              <div className="info">
                <p className="title-info">CNPJ</p>
                <p className="content-info">{item.cnpj}</p>
              </div>
            </div>
            <div className="line-info">
              <div className="info">
                <p className="title-info">Telefone</p>
                <p className="content-info">{item.telefone}</p>
              </div>
              <div className="info">
                <p className="title-info">E-mail</p>
                <p className="content-info">{item.email}</p>
              </div>
            </div>
            <div className="line-info">
              <div className="info">
                <p className="title-info">Rua</p>
                <p className="content-info">{item.rua}</p>
              </div>
              <div className="info">
                <p className="title-info">Bairro</p>
                <p className="content-info">{item.bairro}</p>
              </div>
            </div>
            <div className="line-info">
              <div className="info">
                <p className="title-info">Número</p>
                <p className="content-info">{item.numero}</p>
              </div>
              <div className="info">
                <p className="title-info">Complemento</p>
                <p className="content-info">{item.complemento}</p>
              </div>
            </div>
            <div className="line-info">
              <div className="info">
                <p className="title-info">CEP</p>
                <p className="content-info">{item.cep}</p>
              </div>
              <div className="info">
                <p className="title-info">Cidade</p>
                <p className="content-info">{item.cidade}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default DetalhesDrawer;
