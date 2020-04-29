import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/Layout'
import { Search, Input, Button, Title, Table, Link, Td, Th } from './styles';


function App() {
  const [ urlPdf , seturlPdf ] = useState([])
  useEffect(() => {
    window.fetch('http://localhost:8000/api/azure')
        .then(res => res.json())
        .then(response => {
          seturlPdf(response.data)
        })
  }, [])

  return (
    <Layout>
      <Search>
        <form>
            <Input placeholder='Label' required></Input>
            <Input placeholder='Hospital' required></Input>
            <Button primary>Buscar</Button>
        </form>
        <Button secondary>Cancelar</Button>
      </Search>

      <Title>Todas las pruebas</Title>
      <Table>
        <thead>
          <tr>
            <Th>Paciente</Th>
            <Th>Fecha</Th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>pdf</Td>
            <Td>fecha</Td>
            <td>
              <Link secondary href="http://google.com" target="_blank">Ver</Link>
            </td>
          </tr>
          <tr>
            <Td>pdf</Td>
            <Td>fecha</Td>
            <td>
              <Link secondary href="http://google.com" target="_blank">Ver</Link>
            </td>
          </tr>
          {
            urlPdf.map(pdf => 
              <tr key={urlPdf}>
                <Td>{pdf.label}</Td>
                <Td>{pdf.fecha}</Td>
                <td>
                  <Link secondary href={pdf.urlPdf}  target="_blank">Ver</Link>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </Layout>
  );

}


export default App;
