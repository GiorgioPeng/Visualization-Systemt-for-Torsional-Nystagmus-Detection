import React from 'react';
import './App.css';
import { Layout, Menu, BackTop } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  DeleteOutlined,
  HighlightOutlined,
  ClearOutlined,
  EyeOutlined,
  AppstoreOutlined,
  ScissorOutlined,
  HomeOutlined,
} from '@ant-design/icons'; //这里先随便用了一些图标，后面再调整

import { GlobalStateProvider } from "./globalState";

import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom' // 导入路由组件

import Introduction from './components/Introduction';

import Label from './subPages/Label'
import Overview from './subPages/Overview'
import RemoveUselessFrame from './subPages/RemoveUselessFrame'
import Cut from './subPages/Cut'
import LightStream from './subPages/LightStream'
import Location from './subPages/Location'
import Home from './subPages/Home'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu
function App() {
  const [collapsed, setCollapsed] = React.useState(false) // 这个state用于控制左侧导航栏的开关状态

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <GlobalStateProvider>
      <Layout>
        <BrowserRouter>
          <Sider theme="light" trigger={null} className="site-sider" collapsible collapsed={collapsed}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{ fontSize: '20px', fontWeight: 'bold' }}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<HighlightOutlined />}>
                <Link to="/label">标注</Link>
              </Menu.Item>

              <SubMenu key="sub1" icon={<ClearOutlined />} title="预处理">
                <Menu.Item key="3" icon={<DeleteOutlined />}>
                  <Link to="/removeuselessframe">去除无用帧</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ScissorOutlined />}>
                  <Link to="/cut">对标剪裁</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<VideoCameraOutlined />}>
                  <Link to="/lightstream">光流视频</Link>
                </Menu.Item>
              </SubMenu>


              <Menu.Item key="6" icon={<AppstoreOutlined />}>
                <Link to="/overview">结果总览</Link>
              </Menu.Item>

              <Menu.Item key="7" icon={<EyeOutlined />}>
                <Link to="/location">眼震定位视频</Link>
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
                <Route path="/removeuselessframe">
                  <RemoveUselessFrame />
                </Route>

                <Route path="/cut">
                  <Cut />
                </Route>

                <Route path="/lightstream">
                  <LightStream />
                </Route>

                <Route path="/overview">
                  <Overview />
                </Route>

                <Route path="/location">
                  <Location />
                </Route>

                <Route path="/label">
                  <Label />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>

      </Layout>

      <BackTop />
      <Introduction />
    </GlobalStateProvider>
  );
}

export default App;
