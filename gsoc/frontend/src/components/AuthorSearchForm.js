import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import SearchedScholar from './SearchedScholar';
import axios from 'axios';

const { Option } = Select;


class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', scholars:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/metrics/')
    .then(res =>{
      this.setState({
        scholars: res.data
      });
      console.log(res.data);
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render(){
      return (
        <div>
          <div>
            <Form style={{textAlign: 'center', padding : '50px'}}  onSubmit={this.handleSubmit}>

                  <span style ={{color: "green", fontSize:'60px', alignContent:'center'}}><b><span style={{color:'yellow'}}>Aossie </span>Scholar</b></span>
                <Form.Item hasFeedback validateStatus="success" >
                <Input style={{ width: '80%' , height: '45px' }}
                  value = {this.state.value}
                  placeholder="scholar search..."
                  onChange={this.handleChange}

                />
              </Form.Item>
            </Form>
          </div>
          <div>
          <SearchedScholar data = {this.state.scholars.filter((scholar) => {
        return scholar.author_name.toUpperCase().includes(this.state.value.toUpperCase()) && this.state.value !== '';
      })}/>
          </div>
        </div>
  );
  }
}

export default SearchForm;
