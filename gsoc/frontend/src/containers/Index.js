import React from 'react';
import SearchForm from '../components/AuthorSearchForm';
import RegistrationForm from  '../components/AuthorRegistrationForm';
import Contact from '../components/Contact';
import { Card, Col, Row,Carousel } from 'antd';
import Image1 from '../assets/1.jpg';
import Image2 from '../assets/AOSSIE.png';
import Image3 from '../assets/search.jpg';
import Image4 from '../assets/gitlab.png';

const { Meta } = Card;
const Index =(props) => {
  return(
    <div>
      <div style={{textAlign: 'center', backgroundAttachment: 'fixed',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',backgroundImage:"url('https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=370&w=1200') ", width: '100%'}}>
        <img src={Image2} style={{width:'30%'}}/>
        <br/><br/><br/><span style ={{color: "green", fontSize:'80px', alignContent:'center', fontFamily: 'cursive', fontStyle:'oblique', fontVariant: 'small-caps'}}><b><span style={{color:'yellow', fontFamily: 'cursive', fontStyle:'oblique', fontVariant: 'small-caps'}}>Aossie </span>Scholar</b></span>
      </div>
      <div style={{textAlign:'center', padding:'20px'}}>
      </div>
     

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card  hoverable 
             cover={<img alt="example" src={Image3} />}
              bordered={false}     
            >
            <Meta title="What is Aossie Scholar?" description="Aossie is a project of Australia opoen source organization." />
              
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card  hoverable 
             cover={<img alt="example" src={Image1} />}
              bordered={false}
           
            >
            <Meta title="Why Aossie Scholar?" description="To get more accurate data and flawless metrces than Google Schlolar." />
              
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card  hoverable 
             cover={<img alt="example" src={Image4}  />}
              bordered={false}
           
            >
            <Meta title="Contribute to Aossie Scholar" description="Visit https://gitlab.com/aossie/aossie-scholar" />
              
            </Card>
          </Col>
        </Row>
      </div>

     



        <RegistrationForm/>
        <Contact/>
    </div>

  );
}
export default Index;
