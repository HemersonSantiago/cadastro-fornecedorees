import React from "react";
import { Drawer } from "antd";

const DetalhesDrawer = ({ visivel, fecharDrawer, item }) => {
  console.log("item", item);
  return (
    <Drawer
      title="Detalhes do Fornecedor"
      placement="right"
      closable={true}
      onClose={fecharDrawer}
      visible={visivel}
      width={"40%"}
    >
      <p>{item && item.nome}</p>
    </Drawer>
  );
};

export default DetalhesDrawer;
