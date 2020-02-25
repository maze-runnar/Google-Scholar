import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer } = Layout;
const CustomLayout = (props) => {
  return(
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}

      >
        <Menu.Item key="1" href="/metrics"><Link to="/"><Icon type="home" /> Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/search"><Icon type="search" /> Search</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/info"><Icon type="info-circle" /> About</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/contact"><Icon type="mail" /> Contact</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/allscholars"><Icon type="user" /> AllScholars</Link></Menu.Item>

      </Menu>
    </Header>
    <Content>
      <div style={{ background: '#fff', padding: 10, minHeight: '405px'}}>
        {props.children}

      </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>
      Copyright Aossie @2020<br/>
      <div className="icons-list" style={{ fontSize: '50px' }}>
        <Icon type="github"  style={{ color: 'black', padding:'8px' }}/>
        <Icon type="facebook" style={{ color: 'blue' , padding:'8px'}}/>
        <Icon type="gitlab" style={{ color: 'yellow', padding:'8px' }}/>
        <Icon type="twitter"  style={{ color: 'darkblue', padding:'8px' }}/>
        <Icon type="instagram"  style={{ color: 'black', padding:'8px' }}/>
        <Icon type="youtube" style={{ color: 'red', padding:'8px' }}/>
        <Icon type="google" style={{ color: 'green', padding:'8px' }}/>
        <Icon type="linkedin"  style={{ color: 'darkblue' , padding:'8px'}}/>
      </div>


    </Footer>
  </Layout>

  );
}

export default CustomLayout;
