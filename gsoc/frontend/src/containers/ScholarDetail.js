import React from 'react';
import axios from 'axios';
import { Descriptions,Card, Row, Col, Collapse, Icon, Table} from 'antd';

class ScholarDetail extends React.Component {

  state = {
    scholar:{},
  }

  componentDidMount() {
    const scholarurl = this.props.match.params.scholarurl;
    axios.get(`http://127.0.0.1:8000/api/metrics/${scholarurl}/`)
    .then(res =>{
      this.setState({
        scholar: res.data,
      });
      console.log(res.data);
    })
  }
  render(){
    const { Panel } = Collapse;
    const customPanelStyle = {
		  background: '#f7f7f7',
		  borderRadius: 4,
		  marginBottom: 24,
		  border: 0,
		  overflow: 'hidden',
    };
    const data = [
      {
        key: '1',
        name: this.state.scholar.publication_title,
        age: 32,
        address: 'New York No. 1 Lake Park',
      }
    ];

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
    function onChange(pagination, sorter, extra) {
      console.log('params', pagination,sorter, extra);
    }

    return(
      <div>

        <Row >
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <div style={{textAlign: 'center',padding:'40px'}}>
              <img
                width={220}
                height={220}
                alt="scholar img"
                src={"https://scholar.google.com.au/citations?view_op=view_photo&user="+this.state.scholar.profile_url+"&citpid=2"}
                style ={{objectFit:'cover', borderRadius:'50%'}}
                />
                <br/>
                <span style={{backgroundColor: 'teal', color:'white', fontSize:'20px'}}>{this.state.scholar.author_name}</span>
            </div>
          </Col>

          <Col xs={24} sMortality in randomized trials of antioxidant supplements for primary and secondary preventionm={24} md={24} lg={18} xl={18}>
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >
            <Panel header="Scholar Information" key="1" style={customPanelStyle}>
              <Descriptions  bordered>
                <Descriptions.Item label="Name" span={2}>{this.state.scholar.author_name}</Descriptions.Item>
                <Descriptions.Item label="Country">{this.state.scholar.country}</Descriptions.Item>
                <Descriptions.Item label="University" span={2}>{this.state.scholar.Company}</Descriptions.Item>
                <Descriptions.Item label="Register time">2020-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="TNCc" span={1}>
                  {this.state.scholar.TNCc}
                </Descriptions.Item>
                <Descriptions.Item label="h-index" span={1}>
                  {this.state.scholar.Hindex}
                </Descriptions.Item>
                <Descriptions.Item label="o-index" span={1}>
                  {this.state.scholar.Oindex}
                </Descriptions.Item>
                <Descriptions.Item label="m-index" span={1}>
                  {this.state.scholar.Mindex}
                </Descriptions.Item>
                <Descriptions.Item label="g-index" span={1}>
                  {this.state.scholar.Gindex}
                </Descriptions.Item>
                <Descriptions.Item label="h-median" span={1}>
                  {this.state.scholar.Hmedian}
                </Descriptions.Item>
                <Descriptions.Item label="Website"><a href="https://codexmaze.blogspot.com">{this.state.scholar.Website}</a></Descriptions.Item>
              </Descriptions>
            </Panel>
            </Collapse>
          </Col>
			  </Row>

           {/* table component */}
        <div>
        {this.state.publication}
          <Table columns={columns}  onChange={onChange} size="middle" bordered/>
          {/* <p>{this.state.scholar.publication_title}</p> */}

        </div>

      </div>
    );
  }
}

export default ScholarDetail;
