import { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [updateTable, setUpdateTable] = useState(false);

  return (
    <>
      <Form setUpdateTable={setUpdateTable} />
      <Table updateTable={updateTable} setUpdateTable={setUpdateTable} />
    </>
  );
}

export default App;
