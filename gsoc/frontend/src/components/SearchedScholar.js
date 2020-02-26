import React from 'react';
import { List, Avatar, Icon, Button } from 'antd';


const SearchedScholar = (props)=>{
  return (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 5,
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
            alt="scholar img"
            src={"https://scholar.google.com.au/citations?view_op=view_photo&user="+item.profile_url+"&citpid=2"}

            />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={"https://img.favpng.com/15/23/14/google-scholar-academic-journal-google-logo-education-png-favpng-0uceM1mAtbc5DfsdtKmriNSDW.jpg"} />}
          title={<a href={item.profile_url}><span style={{fontWeight: 'bold'}}>Author Name: </span>{item.author_name}</a>}
          description={<a href={"http://scholar.google.com/citations?user=" + item.profile_url}><span style={{fontWeight:'bold'}}>Profile: </span>http://scholar.google.com/citations?user={item.profile_url}</a>}

        />
        <div style={{marginLeft:'40px'}}>
       <span style={{fontFamily:'inherit', fontSize:'20px', fontWeight: 'bold'}}> Website </span>: {item.Website}
       <br/>
       <br/>
       <Button style={{backgroundColor:'#0a6f6f', borderRadius:'0', color:'white'}}>
          Aossie Scholar Profile
        </Button>
        <a href={"http://scholar.google.com/citations?user=" + item.profile_url}>
        <Button style={{backgroundColor:'#0a6f6f', borderRadius:'0', color:'white'}}>
          Google Scholar Profile
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
export default SearchedScholar;
