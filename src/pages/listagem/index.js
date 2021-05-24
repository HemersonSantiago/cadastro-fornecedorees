import React, { useState } from "react";
import Layout from "../Layout";
import { Table } from "antd";
import DrawerDetails from "./components/detalhes";

const Listagem = () => {
  const [DrawerVisivel, setDrawerVisivel] = useState(true);
  const [itemDrawer, setItemDrawer] = useState(null);

  const mostrarDrawer = (item) => {
    setItemDrawer(item);
    setDrawerVisivel(true);
  };

  const fecharELimparDrawer = () => {
    setItemDrawer(null);
    setDrawerVisivel(false);
  };

  const listaFornecedor = localStorage.getItem("lista-fornecedor") || [];

  const listaFornecedorParaJSON = JSON.parse(listaFornecedor).map((item) => {
    const { endereco, ...rest } = item;
    return { ...endereco, ...rest };
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome do fornecedor",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Razão social",
      dataIndex: "razaoSocial",
      key: "razaoSocial",
    },
    {
      title: "CNPJ",
      dataIndex: "cnpj",
      key: "cnpj",
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Ação",
      dataIndex: "id",
      key: "id",
      render: (id, record) => {
        return <span onClick={() => mostrarDrawer(record)}>Detalhes</span>;
      },
    },
  ];

  return (
    <Layout>
      <Table
        dataSource={listaFornecedorParaJSON}
        columns={columns}
        bordered
        rowKey={(record) => record.id}
      />
      ;
      <DrawerDetails
        visivel={DrawerVisivel}
        fecharDrawer={() => fecharELimparDrawer()}
        item={itemDrawer}
      />
    </Layout>
  );
};

export default Listagem;
