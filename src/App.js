import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'; //这里先随便用了一些图标，后面再调整

import { GlobalStateProvider } from "./globalState";

import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom' // 导入路由组件

import Label from './subPages/Label'
import Detect from './subPages/Detect'
import Predict from './subPages/Predict'

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState(false) // 这个state用于控制左侧导航栏的开关状态

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <GlobalStateProvider>
      <Layout>
        <BrowserRouter>
          <Sider trigger={null} className="site-sider" collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/label">标注</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/detect">检测</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/predict">病情预测</Link>
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="site-layout-background">
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>

            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/label">
                  <Label />
                </Route>
                <Route path="/detect">
                  <Detect />
                </Route>
                <Route path="/predict">
                  <Predict />
                </Route>
                <Redirect to="/label"></Redirect>
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>
      </Layout>
    </GlobalStateProvider>
  );
}

export default App;
