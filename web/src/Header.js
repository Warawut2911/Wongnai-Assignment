import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap'

function Header({setKeyword}) {
    function handleChange(event){
        setKeyword(event.target.value);
    }
    
    return (
        <div>
            <Container style={{padding : "30px"}}>
                <Row>
                    <h1 style={{color : "#2c9cdb", fontSize : "55px"}}>เที่ยวไหนดี</h1>
                </Row>
                <br></br>
                <Row className="center">
                    <input onChange={handleChange} className="form-control" style={{width : 500, textAlign : 'center'}} placeholder="หาที่เที่ยวแล้วไปกัน..."></input>
                </Row>
            </Container>
        </div>
      
    );
}

export default Header;