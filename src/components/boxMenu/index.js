import React from "react";
import { Link } from "react-router-dom";

const BoxMenu = ({ item }) => {
  return (
    <div
      className="content"
      style={{
        background: item.color,
        position: item.disabled ? "relative" : "",
      }}
    >
      {item.disabled && (
        <div className="disable-item-menu">
          <p className="early">Em breve</p>
        </div>
      )}

      {item.to ? (
        <Link to={item.to} style={{ color: "#fff" }}>
          <div className="align-content">
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </div>
        </Link>
      ) : (
        <span style={{ color: item.disabled ? "#c8c8c1" : "#fff" }}>
          <div className="align-content">
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </div>
        </span>
      )}
    </div>
  );
};

export default BoxMenu;
