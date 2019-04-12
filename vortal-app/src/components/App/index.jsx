import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'

import SolarSystem from '../SolarSystem'
import Movies from '../Movies'
import AboutMe from '../AboutMe'
import DetailMovie from '../DetailMovie'

import { Layout, Menu, Icon, } from 'antd';
import 'antd/dist/antd.css'
import logo from './logo.png'
import './index.sass'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App(props) {
  console.log(props)
    return (
      <Layout>
        <Header className="header">
            <img src={logo} alt='logo-vortal' className='logo'></img>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" onClick={()=>props.history.push('/solar-system')}>Solar System</Menu.Item>
            <Menu.Item key="2" onClick={()=>props.history.push('/movies')}>Movies</Menu.Item>
            <Menu.Item key="3" onClick={()=>props.history.push('/about-me')}>About Me</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1"  title={<span><Icon type="rocket" />Solar System</span>}>
                <Menu.Item key="1" onClick={()=>props.history.push('/solar-system')}>Solar system</Menu.Item>
                <Menu.Item key="2" disabled={true} >Stars</Menu.Item>
                <Menu.Item key="3" disabled={true}>Galxies</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="play-circle" />Movies</span>}>
                <Menu.Item key="5" onClick={()=>props.history.push('/movies')}>Search</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <div style={{ margin: '16px 0' }}>
              <button onClick={()=>props.history.goBack()} className='App__button'>Back</button>
            </div>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            
            >
              <Route path="/solar-system" render={() => <SolarSystem />} />
              <Route path="/movies" render={() => <Movies />} />
              <Route path="/about-me" render={() => <AboutMe />} />
              <Route path="/movie/:id" render={() => <DetailMovie />} />
        </Content>
          </Layout>
        </Layout>
      </Layout>
    );
}

export default withRouter(App)

