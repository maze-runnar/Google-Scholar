import React from 'react';
import { Form, Input, Select, InputNumber, Button } from 'antd';
const { Option } = Select;


class RegistrationForm extends React.Component{
	render(){
	  return (
		<div >
		  <div style={{textAlign:'center'}}>
		   <h1 style = {{fontWeight:"bold", fontSize:"40px"}}>Register Scholar</h1>
		  <hr style = {{width: "300px", backgroundColor:'green', height:"6px"}}/>
		  <small>
			Register with aossie scholar to get more accurate data<br/>
		  	Register to continue with Aossie Scholar to get more accurate
		    And precise data of Scholars
		  </small>
		  </div>
		  <Form style={{ padding : '50px'}} >
			<Form.Item label="Scholar URL" hasFeedback validateStatus="success">
			  <Input style={{ width: '100%', height:'40px' }} />
			</Form.Item>

			<Form.Item label="Maximum Publications" hasFeedback validateStatus="success">
				<InputNumber style={{ width: '100%', height:'40px' }} />
			</Form.Item>
			<Form.Item label="Country" hasFeedback validateStatus="success">
				<Select defaultValue="Australia">
				  <Option value="India" key ="1">India</Option>
				  <Option value="Australia" key ="3">Australia</Option>
				  <Option value="Austria" key ="4">Austria</Option>
				  <Option value="Jermany" key ="5">Jermany</Option>
				  <Option value="Brazil" key ="6">Brazil</Option>
				  <Option value="Urope" key ="7">Urope</Option>
				  <Option value="London" key ="8">United Kingdom</Option>
				  <Option value="USA" key ="9">USA</Option>
				  <Option value="Aossie" key ="2">India</Option>
				</Select>
			</Form.Item>
			<Button type="primary" icon="login" style={{height:'45px'}}>Register</Button>
		  </Form>
	  </div>
	  );
	}
}

export default RegistrationForm;
