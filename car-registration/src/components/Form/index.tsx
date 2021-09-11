import { useState } from 'react';

import './styles.css';

const API = 'http://localhost:3333/cars';

const initialValues = {
  image: '',
  brandModel: '',
  year: '',
  plate: '',
  color: '',
};

type FormProps = {
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ setUpdateTable }: FormProps) {
  const [values, setValues] = useState(initialValues);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (Object.values(values).some((value) => !value)) return;

    fetch(API, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then(() => {
        setValues(initialValues);
        setUpdateTable(true);
      })
      .catch((error) => console.log(error));
  }

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='image'>Imagem (URL):</label>
        <input
          type='text'
          id='image'
          value={values.image}
          onChange={(s) => handleInput('image', s.target.value)}
        />
      </div>

      <div>
        <label htmlFor='brandModel'>Marca/Modelo:</label>
        <input
          type='text'
          id='brandModel'
          value={values.brandModel}
          onChange={(s) => handleInput('brandModel', s.target.value)}
        />
      </div>

      <div>
        <label htmlFor='year'>Ano:</label>
        <input
          type='number'
          id='year'
          value={values.year}
          onChange={(s) => handleInput('year', s.target.value)}
        />
      </div>

      <div>
        <label htmlFor='plate'>Placa:</label>
        <input
          type='text'
          id='plate'
          value={values.plate}
          onChange={(s) => handleInput('plate', s.target.value)}
        />
      </div>

      <div>
        <label htmlFor='color'>Cor:</label>
        <input
          type='text'
          id='color'
          value={values.color}
          onChange={(s) => handleInput('color', s.target.value)}
        />
      </div>

      <button type='submit'>Enviar</button>
    </form>
  );
}
