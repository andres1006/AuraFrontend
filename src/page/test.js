import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import { Search, Input, Button, Title, Table, Link, Td, Th } from '../styles';
import ViewerPdf from '../components/ViewerPdf'

function DetailTestPacient({label, hospital}) {
    let email = "";
    const [ urlPdf , seturlPdf ] = useState([])
    useEffect(() => {
      fetch('http://localhost:8000/api/azure/buscar', {
        method: 'POST',
        body:  JSON.stringify({
            hospital: hospital,
            label: label
          })
        }).then(res => res.json())
          .then(response => {
              console.log(response)
            seturlPdf(response.data)
          })
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/api/mail', {
          method: 'POST',
          body:  JSON.stringify({
              email: email,
              hospital: hospital,
              label: label
            })
          }).then(res => res.json())
            .then(response => {
                console.log(response)
              seturlPdf(response.data)
            })
      }, [])


  return (
    <Layout>
        <Search>
        <form >
            <Input placeholder='Email' value={email} required ></Input>
            <Button primary type="submit">Enviar</Button>
        </form>
      </Search>
        <ViewerPdf url={urlPdf.urlPdf}></ViewerPdf>

    </Layout>
  );
}

export default DetailTestPacient;