import React from 'react';
import Tab from './components/Tab.js'
import Nav from './components/Nav.js'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="#components-layout-demo-basic">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Nav />
        </Header>
        <Content className="site-layout" style={{ padding: '0 1px', marginTop: 64 }}>

          <div className="site-layout-background" style={{ padding: 5, minHeight: 500 }}>
            <Tab />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
      mountNode,
    </div>
  )
}


export default App;
