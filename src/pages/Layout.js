import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import menu from "../contants/menu";

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
        onCollapse={value => onCollapse(value)}
      >
        <div className={collapsed ? "logo-reduced" : "logo-default"}>
          <Link to="/">
            <img src={collapsed ? logoReduzido : logoDefault} alt="Logo" />
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
