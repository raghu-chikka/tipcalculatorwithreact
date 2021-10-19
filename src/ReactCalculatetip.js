import React, { useState } from 'react';
import { Button, Form, Table, Row, Col, Alert} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'

export default function ReactCalculatetip() {

  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [service, setService] = useState();
  const [totalBill, setTotalBill] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);



  const handleChange = (e) => {
    setState(e.target.value);
  }

  const addCustomer = () => {
    
    data.push({description: state})
    setData(data)    
    setState("")

    

  }

  const serviceTip = (event) => {
   
    setService(event.target.value);
    
  }

  const ListItem = (props) => {
    
  return (
    
  <ListGroup.Item as="li">{props.listData.description}</ListGroup.Item>
 
  );
  }


  const billAmount = (event) => {
    
    setTotalBill(event.target.value)
  
  }

  

  const calculateTip = () => {
    
    setTotal(((totalBill * (service * 100))/100) + total)
    
    setCount(count + 1)
    
  }

  

  return (

    <div className="container p-5">
      <div className="card shadow-lg bg-white rounded  text-light">
        <div className="card-header bg-primary text-center">
          <h4> Tip Calculator in React </h4>
        </div>
        <div className="card text-dark p-3 ">
          <center>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Enter your bill amount</Form.Label><br />
                <Form.Control onChange={billAmount} type="number" placeholder="Enter total bill amount" /><br />                
              </Form.Group><hr /><br />
            <Form>
                <Row className="align-items-center">
                  <Form.Label column lg={2}>
                    How was the Service?
                  </Form.Label>
                <Col sm={3} className="my-1">
                    <Form.Select onChange={serviceTip} className="me-sm-2"
                      id="inlineFormCustomSelect">
                      <option disabled selected value="0">Choose...</option>
                      <option value="0.2">Excellent - 20%</option>
                      <option value="0.1">Moderate  - 10%</option>
                      <option value="0.05">Bad Service  - 5%</option>
                    </Form.Select>
                </Col>
                <Col sm={3} className="my-1">
                    <Form.Control id="inlineFormInputName" onChange={handleChange} placeholder="Customer Name" />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button onClick={addCustomer}>Add Customer</Button>
                </Col>
                </Row>
            </Form><br />
              <h3>Customer List</h3>
              { 
              data.map((list, index)=> 
              
              <ListItem index={index} listData={list}/> 
              )
               }
            
              
              
              <br />
              <Button variant="success" onClick = {calculateTip} >Calculate Total Tip & Customers</Button>{' '}<br /><br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan="2">Total Customers</th>
                    <th >Total Tip</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">{count}</td>
                    <td>{ total }</td>
                  </tr>
                </tbody>
              </Table>
              </Form>
            
          </center>
        </div>       
      </div>   <Alert variant="dark">
      @ 2021 TIP-CALCULATOR
      </Alert>         
    </div>
  )

};



