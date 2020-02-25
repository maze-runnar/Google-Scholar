import React from 'react';
import {Row, Col} from 'antd';
const Contact = (props) => {
  return(
    <div style={{textAlign: 'center'}}>
      <h1 style = {{fontWeight:"bold", fontSize:"40px"}}>Contact Us</h1>
      <hr style = {{width: "300px", backgroundColor:'green', height:"6px"}}/>
     <Row>
       <Col sm={12} md={12} lg = {12}>
       <a href="https://gitter.im/AOSSIE/AossieScholar">
         <img src="https://pbs.twimg.com/media/C6-XYTSXEAU7Ubg.jpg" width ="80%"/>
       </a>
       </Col>
       <Col sm={12} md={12} lg = {12} >
         <div style={{padding: '100px'}}>
          <h1 style={{fontWeight: 'bold', fontWeight:"100px", fontFamily:'cursive'}}>Please Use our
          <a href="https://gitter.im/AOSSIE/AossieScholar"> Gitter Channel</a> to Contact us ..

          </h1>
        </div>
       </Col>
      </Row>
    </div>
  );
}
export default Contact;
