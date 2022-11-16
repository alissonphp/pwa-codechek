function emailField(value: string) {
  let error;
  if (!value) {
    error = "Campo de preenchimento obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "O e-mail informado não é válido";
  }

  return error;
}

export default emailField;
