import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infos) {
    setValue(infos.target.getAttribute('name'),
      infos.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
