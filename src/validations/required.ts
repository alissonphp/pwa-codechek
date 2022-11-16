function requiredField(value: string) {
  let error;
  if (!value) {
    error = "Campo de preenchimento obrigatório";
  }

  return error;
}

export default requiredField;
