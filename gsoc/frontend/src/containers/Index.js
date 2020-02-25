import React from 'react';
import SearchForm from '../components/AuthorSearchForm';
import RegistrationForm from  '../components/AuthorRegistrationForm';
import Contact from '../components/Contact';
const Index =(props) => {
  return(
    <div>
      <div style={{textAlign: 'center', backgroundImage:"url('https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=370&w=1200') ", width: '100%'}}>
        <img src="https://aossie.gitlab.io/img/AOSSIE_logo_11_cropped_15cm.png" style={{width:'30%'}}/>
        <br/><br/><br/><span style ={{color: "green", fontSize:'80px', alignContent:'center'}}><b><span style={{color:'yellow'}}>Aossie </span>Scholar</b></span>
      </div>
      <div style={{textAlign:'center', padding:'40px'}}>
      </div>
        <RegistrationForm/>
        <Contact/>
    </div>

  );
}
export default Index;
