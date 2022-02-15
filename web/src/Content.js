import React, { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
const axios = require('axios');

function Content({ keyword }) {
    const [data, setData] = useState([])
    const gateway = 'http://localhost:8080/trips?keyword='

    useEffect(() => {
        axios.get(gateway + keyword)
            .then(res => {
                setData(res.data);
            }).catch(err => console.error(err))
    }, [keyword])

    return (
        <div>
            {data.map((val, id) => (
                <div className="d-flex justify-content-center">
                    <div key={id} className="card" style={{ width: "75%", padding: "15px", border: "0" }}>
                        <Row>
                            <Col lg="4"><img src={val.photos[0]} style={{ width: 300, height: 250, borderRadius: 20 }}></img></Col>
                            <Col>
                                <a className="link" href={val.url}><h3><b>{val.title}</b></h3></a>
                                <Row>
                                    <Col><p className="show-more">{val.description}</p></Col>
                                    <Col><a href={val.url}>อ่านต่อ</a></Col>
                                </Row>
                                <p className="tag">
                                    หมวด:
                                    {val.tags.map((t, ta) => (
                                        <a key={ta} href={'http//:localhost:3000/trips?keyword=' + t} className="tag-element">{t}</a>
                                    ))}

                                </p>
                                <br></br>
                                <img className="images" src={val.photos[1]}></img>
                                <img className="images" src={val.photos[2]}></img>
                                <img className="images" src={val.photos[3]}></img>
                            </Col>
                        </Row>

                    </div>
                </div>
            ))}
        </div>
    );
}


export default Content;