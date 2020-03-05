import React from 'react';
import { List, Avatar, Icon, Button } from 'antd';


const Allscholars = (props)=>{
  return (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    footer={
      <div>
        <b>@Aossie-Scholar</b>
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}

        extra={
          <img
            width={125}
            alt="logo"
            src={"https://scholar.google.com.au/citations?view_op=view_photo&user="+item.profile_url+"&citpid=2"}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={"https://img.favpng.com/15/23/14/google-scholar-academic-journal-google-logo-education-png-favpng-0uceM1mAtbc5DfsdtKmriNSDW.jpg"} />}
          title={<a href={"profile/"+item.profile_url}><span style={{fontWeight: 'bold'}}>Author Name: </span>{item.author_name}</a>}
          description={<a href={item.profile_url}><span style={{fontWeight:'bold'}}>Profile: </span>{item.profile_url}</a>}

        />
        <div style={{marginLeft:'40px'}}>
       <span style={{fontFamily:'inherit', fontSize:'20px', fontWeight: 'bold'}}> Website </span>: {item.Website}
       <br/>
       <br/>
       <a href={"http://localhost:3000/profile/" + item.profile_url}>
        <Button style={{backgroundColor:'teal', borderRadius:'0', color:'white'}}>
          Read More
        </Button>
      </a>
        </div>

        {/* <ul>
        {item.coAuthors.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
        </ul> */}
      </List.Item>
    )}
  />
  );
}
export default Allscholars;
