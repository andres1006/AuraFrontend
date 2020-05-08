import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import { Search, Input, Button, Title, Table, Link, Td, Th } from '../styles';


function ListTests() {
  const [ urlPdf , seturlPdf ] = useState([])
  const [ data , setData ] = useState([])
  useEffect(() => {
    window.fetch('http://localhost:8000/api/azure')
        .then(res => res.json())
        .then(response => {
          seturlPdf(response.data)
          setData(response.data)
        })
  }, [])

  const Filter = (e) => {
    const { value } = e.target
    const filter = urlPdf.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
    setData(filter)
  }

  return (
    <Layout>
      <Search>
        <form>
            <Input placeholder='Filtar por Label Paciente' required onChange={Filter}></Input>
           {/*  <Input placeholder='Hospital' required></Input>
            <Button primary>Buscar</Button> */}
        </form>
        {/* <Button secondary>Cancelar</Button> */}
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
          {
            data.map(pdf => 
              <tr key={urlPdf}>
                <Td>{pdf.label}</Td>
                <Td>{pdf.fecha}</Td>
                <td>
                  <Link secondary to={`/detail/:${pdf.label}/:${pdf.hospital}`} >Ver</Link>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </Layout>
  );
}

export default ListTests;