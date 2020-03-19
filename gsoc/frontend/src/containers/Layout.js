import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon ,Tooltip } from 'antd';

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
        <Menu.Item key="6"><Link to="/register"><Icon type="login" /> Register</Link></Menu.Item>
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

    <Footer style={{ textAlign: 'center' , backgroundColor: '#4f4b4b'}}>
      
      <div className="icons-list" style={{ fontSize: '50px' }}>
        <Tooltip title="Github" ><Icon hoverable  type="github"  style={{ color: 'white', padding:'8px' }}/></Tooltip>
        <Tooltip title="Facebook"><Icon type="facebook" style={{ color: 'white' , padding:'8px'}}/></Tooltip>
        <Tooltip title="Gitlab"><Icon type="gitlab" style={{ color: 'white', padding:'8px' }}/></Tooltip>
        <Tooltip title="Twitter"><Icon type="twitter"  style={{ color: 'white', padding:'8px' }}/></Tooltip>
        <Tooltip title="Instagram"><Icon type="instagram"  style={{ color: 'white', padding:'8px' }}/></Tooltip>
        <Tooltip title="Youtube"><Icon type="youtube" style={{ color: 'white', padding:'8px' }}/></Tooltip>
        <Tooltip title="Google+"><Icon type="google" style={{ color: 'white', padding:'8px' }}/></Tooltip>
        <Tooltip title="LinkedIn"><Icon type="linkedin"  style={{ color: 'white' , padding:'8px'}}/></Tooltip>
      </div>
       Copyright Aossie @2020<br/>


    </Footer>
  </Layout>

  );
}

export default CustomLayout;
