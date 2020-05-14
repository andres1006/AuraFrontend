import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout'
import Moment from 'react-moment';
import moment from 'moment';
import { Search, Input, Title, Table, Link, Td, Th } from '../styles';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const { REACT_APP_API_AURA_SERVICES } = process.env;

function ListTests() {
  const [startDate, setStartDate] = useState(new Date());
  const [ urlPdf , seturlPdf ] = useState([])
  const [ data , setData ] = useState([])
  
  useEffect(() => {
    window.fetch(`${REACT_APP_API_AURA_SERVICES}api/azure`)
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


  const handleChange = date => {
    setStartDate(date)
    let dateCheck = moment(date).format("yyyy/MM/DD").toString();
    const filter = urlPdf.filter(item => {
        let dateItem =  moment(item.fecha).format("yyyy/MM/DD").toString();
        if(dateCheck === dateItem){
            return true
        }
        return false
    })
    //console.log(filter);
    setData(filter)
  };

  return (
    <Layout>
      <Search>
        <form>
            <Input placeholder='Filtar por Label Paciente' required onChange={Filter}></Input>
            <DatePicker selected={startDate} onChange={ handleChange } />           
        </form>
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
                <Td><Moment format="YYYY/MM/DD" >{pdf.fecha}</Moment></Td>
                <Td>
                    <Link secondary="true" to={{pathname:`/detail`, state:{label: pdf.label,hospital: pdf.hospital}}} >Ver</Link>
                </Td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </Layout>
  );
}

export default ListTests;