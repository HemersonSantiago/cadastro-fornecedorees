import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import menu from "../contants/menu";

import logoReduzido from "../assets/logo-reduzido.png";
import logoPadrao from "../assets/logo-default.png";

const { Sider } = Layout;

const Main = ({ children }) => {
  const [colapsado, setColapsado] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={colapsado}
        onCollapse={(value) => setColapsado(value)}
      >
        <div className={colapsado ? "logo-reduced" : "logo-default"}>
          <Link to="/">
            <img src={colapsado ? logoReduzido : logoPadrao} alt="Logo" />
          </Link>
        </div>
        <Menu theme="light" mode="inline">
          {menu.map((item, key) => (
            <>
              {item.disabled ? (
                <Menu.Item
                  key={key}
                  icon={item.smallIcon}
                  disabled={item.disabled}
                >
                  <span>{item.name}</span>
                </Menu.Item>
              ) : (
                <Menu.Item key={key} icon={item.smallIcon}>
                  <Link to={item.to}>{item.name}</Link>
                </Menu.Item>
              )}
            </>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">{children}</Layout>
    </Layout>
  );
};

export default Main;
