import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import { Search, Input, Button, Title, Table, Link, Td, Th } from '../styles';
import ViewerPdf from '../components/ViewerPdf'

function DetailTestPacient({label, hospital}) {
    
    const [ urlPdf , seturlPdf ] = useState(null)
    const [email, setEmail] = useState("")
    useEffect(() => {
      fetch(`https://aura-analyzer-server.herokuapp.com/api/azure/buscar/${label}/${hospital}`).then(res => res.json())
          .then(response => {
              console.log(response)
            seturlPdf(response.data)
          })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        debugger;
        const data = {
            email: email,
            hospital: hospital,
            labelPaciente: label
        }
        fetch('https://aura-analyzer-server.herokuapp.com/api/mail', {
          method: 'POST',
          body:  JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
            })
    }

    const getEmail = (e) => {
        const { value } = e.target
        setEmail(value)
    }


  return (
    <Layout>
      {urlPdf &&
        <ViewerPdf url={urlPdf.urlPdf}></ViewerPdf>
      }
        <Search>
        <form onSubmit={sendEmail}>
            <Input placeholder='Email' value={email} required type="email" onChange={getEmail}></Input>
            <Button primary type="submit">Enviar</Button>
        </form>
      </Search>
    </Layout>
  );
}

export default DetailTestPacient;