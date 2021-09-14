import { useEffect, useState } from 'react';

import * as S from './styles';

const API = 'http://localhost:3333/cars';

type Cars = {
  image: string;
  brandModel: string;
  year: number;
  plate: string;
  color: string;
};

type TableProps = {
  updateTable: boolean;
  setUpdateTable: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Table({ updateTable, setUpdateTable }: TableProps) {
  const [cars, setCars] = useState({} as Cars[]);

  async function getCars() {
    fetch(API)
      .then((data) => data.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    if (updateTable) {
      getCars().then(() => setUpdateTable(false));
    }
  }, [updateTable, setUpdateTable]);

  async function deleteCar(plate: string) {
    fetch(API, {
      method: 'DELETE',
      body: JSON.stringify({ plate }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
      .then(() => getCars())
      .catch((error) => console.log(error));
  }

  return (
    <S.Wrapper>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Marca/Modelo</th>
          <th>Ano</th>
          <th>Placa</th>
          <th>Cor</th>
        </tr>
      </thead>

      <tbody>
        {cars.length > 1 ? (
          cars.map((car) => {
            return (
              <tr key={car.plate}>
                <td>{car.image}</td>
                <td>{car.brandModel}</td>
                <td>{car.year}</td>
                <td>{car.plate}</td>
                <td>{car.color}</td>
                <td>
                  <button onClick={() => deleteCar(car.plate)}>Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={100}>Carregando...</td>
          </tr>
        )}
      </tbody>
    </S.Wrapper>
  );
}
