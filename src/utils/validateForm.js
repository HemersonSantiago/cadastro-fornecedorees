export const requiredRule = (required, messagem) => {
  return { required: required, message: messagem }
}

export const emailType = {
  type: "email",
  message: "Necessário um e-mail válido",
};
