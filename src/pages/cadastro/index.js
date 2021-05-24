import React, { useState } from "react";
import Layout from "../Layout";
import { Row, Col, Button, Form, Input, Modal } from "antd";
import api from "../../services/api";
import { requiredRule, emailType } from "../../utils/validateForm";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Cadastro = () => {
  const [form] = Form.useForm();

  const [statusCep, setStatusCep] = useState(undefined);

  const fetchCEP = async (cep) => {
    setStatusCep("validating");
    await api
      .get(`json/${cep}`)
      .then(({ data }) => {
        setStatusCep("success");
        const { address_name, district, city } = data;
        form.setFieldsValue({
          rua: address_name || undefined,
          bairro: district || undefined,
          cidade: city || undefined,
        });
      })
      .catch(() => setStatusCep("error"));
  };

  const confirmacaoFornecedor = fornecedor => {
    Modal.confirm({
      title: "Cadastro de fornecedor",
      icon: <ExclamationCircleOutlined />,
      content: "Tem certeza que deseja cadastrar o fornecedor?",
      okText: "Sim",
      cancelText: "Não",
      onOk() {
        salvarFornecedor(fornecedor)
      } 
    });
  };

  const salvarFornecedor = fornecedor => {
    const { cep, rua, numero, complemento, bairro, cidade, ...rest } = fornecedor;

    const novoFornecedor = {
      endereco: { cep, rua, numero, complemento, bairro, cidade },
      ...rest,
    };

    const listaFornecedor = JSON.parse(
      localStorage.getItem("lista-fornecedor") || "[]"
    );;
    
    listaFornecedor.push({id: listaFornecedor.length + 1,...novoFornecedor});

    localStorage.setItem("lista-fornecedor", JSON.stringify(listaFornecedor));

    form.resetFields();
  };

  return (
    <Layout>
      <h1>Cadastro</h1>
      <Form
        name="basic"
        form={form}
        onFinish={confirmacaoFornecedor}
        layout="vertical"
      >
        <Row gutter={30}>
          <Col md={8}>
            <Form.Item
              label="Nome do fornecedor"
              name="nome"
              rules={[requiredRule(true, "Digite o nome do fornecedor!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              label="Razão social"
              name="razaoSocial"
              rules={[requiredRule(true, "Digite a razão social!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              label="CNPJ"
              name="cnpj"
              rules={[requiredRule(true, "Digite o CNPJ!")]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col md={8}>
            <Form.Item
              label="Segmento"
              name="segmento"
              rules={[requiredRule(true, "Digite o segmento!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              label="Telefone de contato"
              name="telefone"
              rules={[requiredRule(true, "Digite o telefone!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={8}>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[requiredRule(true, "Digite o e-mail!"), emailType]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={30}>
          <Col md={3}>
            <Form.Item
              label="CEP"
              name="cep"
              rules={[requiredRule(true, "Digite o CEP!")]}
              onChange={(e) => fetchCEP(e.target.value)}
              hasFeedback
              validateStatus={statusCep}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={5}>
            <Form.Item
              label="Rua"
              name="rua"
              rules={[requiredRule(true, "Digite a rua!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={3}>
            <Form.Item
              label="Número"
              name="numero"
              rules={[requiredRule(true, "Digite o número!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={5}>
            <Form.Item
              label="Complemento"
              name="complemento"
              rules={[requiredRule(true, "Digite o complemento!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={4}>
            <Form.Item
              label="Bairro"
              name="bairro"
              rules={[requiredRule(true, "Digite o bairro!")]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={4}>
            <Form.Item
              label="Cidade"
              name="cidade"
              rules={[requiredRule(true, "Digite a cidade!")]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Cadastro;
