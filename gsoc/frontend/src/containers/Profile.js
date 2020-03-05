import React from 'react';
import { Descriptions, Row, Col, Collapse, Icon, Table} from 'antd';
import axios from 'axios';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Profile extends React.Component {
	state = {
    chartData: {},
    tableData : 'hope'
	}

	 componentDidMount() {
     let Profile_url = "m8dFEawAAAAJ"
    axios.get(`http://127.0.0.1:8000/api/metrics/${Profile_url}/`)
    .then(res =>{
      this.setState({
        tableData: res.profile_url,
      });
      console.log(res.data);
    })
  }


	render() {
    const { Panel } = Collapse;
    const columns = [
      {
        title: 'Publication',
        dataIndex: 'name',
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
      },
      {
        title: 'Citations',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'CoAuthors',
        dataIndex: 'address',
        filterMultiple: false,
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
      },
    ];

    function onChange(pagination, sorter, extra) {
      console.log('params', pagination,sorter, extra);
    }


		const text = `
		  A dog is a type of domesticated animal.
		  Known for its loyalty and faithfulness,
		  it can be found as a welcome guest in many households across the world.
		`;

		const customPanelStyle = {
		  background: '#f7f7f7',
		  borderRadius: 4,
		  marginBottom: 24,
		  border: 0,
		  overflow: 'hidden',
		};
		return(
			<div>
			<Row >
			<Col xs={24} sm={24} md={24} lg={6} xl={6}>
			<img src = "https://picography.co/wp-content/uploads/2017/11/picography-woman-taking-photos-of-a-giraffe-sm-1.jpg" height="330px" width = "330px" style={{objectFit: 'cover'}}/>
			</Col>

			<Col xs={24} sm={24} md={24} lg={18} xl={18}>
			<Collapse
		    bordered={false}
		    defaultActiveKey={['1']}
		    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
		  >
		  <Panel header="Scholar Information" key="1" style={customPanelStyle}>
				<Descriptions  bordered>
			    <Descriptions.Item label="Name" span={2}>Sundaram Dubey</Descriptions.Item>
			    <Descriptions.Item label="Country">United States</Descriptions.Item>
			    <Descriptions.Item label="University" span={2}>Head of Department, The Copenhagen Trial Unit</Descriptions.Item>
			    <Descriptions.Item label="Register time">2020-04-24 18:00:00</Descriptions.Item>
			    <Descriptions.Item label="TNCc" span={1}>
			      1880
			    </Descriptions.Item>
			    <Descriptions.Item label="h-index" span={1}>
			      100
			    </Descriptions.Item>
			    <Descriptions.Item label="o-index" span={1}>
			      100
			    </Descriptions.Item>
			    <Descriptions.Item label="m-index" span={1}>
			      100
			    </Descriptions.Item>
			    <Descriptions.Item label="g-index" span={1}>
			      100
			    </Descriptions.Item>
			    <Descriptions.Item label="h-median" span={1}>
			      100
			    </Descriptions.Item>
			    <Descriptions.Item label="Website"><a href="https://codexmaze.blogspot.com">Blog website</a></Descriptions.Item>
			  </Descriptions>
			</Panel>
			</Collapse>
			</Col>
			</Row>
       <div style={{width:'70%', justifyContent: 'center', marginLeft: '15%'}}>
        <Bar
            data={this.state.chartData}
            options={{ maintainAspectRatio: true,
              title:{
                display:true,
                text: 'citations per publications'
              }

            }}
          />
        </div>

           {/* table component */}
        <div>
          <Table columns={columns} dataSource={data} onChange={onChange} size="middle" bordered/>
            <p>{this.state.tableData}</p>
        </div>

			</div>
		);
	}


}

export default Profile;
