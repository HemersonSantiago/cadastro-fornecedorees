import {
  ShopOutlined,
  TeamOutlined,
  CreditCardOutlined,
  CalculatorOutlined,
  ShoppingCartOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const menu = [
  {
    to: "/fornecedores",
    color: "#00aeef",
    icon: <ShopOutlined style={{ fontSize: 40 }} />,
    smallIcon: <ShopOutlined />,
    name: "Fornecedores",
    disabled: false,
  },
  {
    to: "",
    color: "",
    icon: <TeamOutlined style={{ fontSize: 40 }} />,
    smallIcon: <TeamOutlined />,
    name: "RH",
    disabled: true,
  },
  {
    to: "",
    color: "",
    icon: <CreditCardOutlined style={{ fontSize: 40 }} />,
    smallIcon: <CreditCardOutlined />,
    name: "Back Office",
    disabled: true,
  },
  {
    to: "",
    color: "",
    icon: <CalculatorOutlined style={{ fontSize: 40 }} />,
    smallIcon: <CalculatorOutlined />,
    name: "Faturamento",
    disabled: true,
  },
  {
    to: "",
    color: "",
    icon: <ShoppingCartOutlined style={{ fontSize: 40 }} />,
    smallIcon: <ShoppingCartOutlined />,
    name: "Comercial",
    disabled: true,
  },
  {
    to: "",
    color: "",
    icon: <LaptopOutlined style={{ fontSize: 40 }} />,
    smallIcon: <LaptopOutlined />,
    name: "Diretoria",
    disabled: true,
  },
];

export default menu;
