import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import { Search, Input, Button, Title, Table, Link, Td, Th } from '../styles';
import ViewerPdf from '../components/ViewerPdf'

const { REACT_APP_API_AURA_SERVICES } = process.env;

function DetailLogs({label, hospital} ) {
    
    const [ urlPdf , seturlPdf ] = useState(null)
    const [email, setEmail] = useState("")

    useEffect(() => {
      fetch(`${REACT_APP_API_AURA_SERVICES}api/azure/buscar`, {
        method: 'POST',
        body:  JSON.stringify({label, hospital}),
        headers:{
          'Content-Type': 'application/json'
        }
      })
          .then(res => res.json())
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

        fetch(`${REACT_APP_API_AURA_SERVICES}api/mail`, {
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
        <h1>Logs details</h1>
    </Layout>
  );
}

export default DetailLogs;