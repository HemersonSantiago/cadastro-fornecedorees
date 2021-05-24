import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Row, Col, Button, Table } from "antd";
import DrawerCadastroFornecedor from "./components/cadastro";
import DrawerDetails from "./components/detalhes";
import { SnippetsOutlined } from "@ant-design/icons";

const Listagem = () => {
  const [listaFornecedor, setListaFornecedor] = useState([]);

  const [drawerCadastroFornecedor, setDrawerCadastroFornecedor] =
    useState(false);

  const [drawerDetalhesVisivel, setDrawerDetalhesVisivel] = useState(false);
  const [itemDrawer, setItemDrawer] = useState(null);

  const fecharDrawerCadastro = () => setDrawerCadastroFornecedor(false);

  const mostrarDrawerDetalhes = (item) => {
    setItemDrawer(item);
    setDrawerDetalhesVisivel(true);
  };

  const fecharELimparDrawerDetalhes = () => {
    setItemDrawer(null);
    setDrawerDetalhesVisivel(false);
  };

  const getLista = () => {
    const lista = localStorage.getItem("lista-fornecedor") || [];

    const listaFornecedorParaJSON = JSON.parse(lista).map((item) => {
      const { endereco, ...rest } = item;
      return { ...endereco, ...rest };
    });

    setListaFornecedor(listaFornecedorParaJSON);
  };

  useEffect(() => {
    console.log("CHAMADOOOO");
    getLista();
  }, []);

  useEffect(() => {
    getLista();
  }, [drawerCadastroFornecedor]);

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
        return (
          <span
            className="button-details"
            onClick={() => mostrarDrawerDetalhes(record)}
          >
            <SnippetsOutlined /> Detalhes
          </span>
        );
      },
    },
  ];

  return (
    <Layout>
      <Row gutter={20}>
        <Col>
          <Button
            type="primary"
            className="button-fornecedor"
            onClick={() => setDrawerCadastroFornecedor(true)}
          >
            Cadastrar fornecedor
          </Button>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col md={24}>
          <div>
            
          </div>
          <Table
            dataSource={listaFornecedor}
            columns={columns}
            bordered
            rowKey={(record) => record.id}
          />
        </Col>
      </Row>
      <DrawerCadastroFornecedor
        visivel={drawerCadastroFornecedor}
        fecharDrawer={() => fecharDrawerCadastro()}
      />
      <DrawerDetails
        visivel={drawerDetalhesVisivel}
        fecharDrawer={() => fecharELimparDrawerDetalhes()}
        item={itemDrawer}
      />
    </Layout>
  );
};

export default Listagem;
