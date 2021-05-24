import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { FileSearchOutlined, UserAddOutlined } from "@ant-design/icons";

import logoReduzido from "../assets/logo-reduzido.png";
import logoDefault from "../assets/logo-default.png";

const { Sider } = Layout;

const Main = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (value) => {
    setCollapsed(value);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => onCollapse(value)}
      >
        <div className={collapsed ? "logo-reduzido" : "logo-default"}>
          <Link to="/">
            <img src={collapsed ? logoReduzido : logoDefault} alt="Logo" />
          </Link>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserAddOutlined />}>
            <Link to="/cadastro">Cadastro</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileSearchOutlined />}>
            <Link to="/listagem">Listagem</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">{children}</Layout>
    </Layout>
  );
};

export default Main;
