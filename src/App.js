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
  AimOutlined,
  AppstoreOutlined,
  ScissorOutlined,
} from '@ant-design/icons'; //这里先随便用了一些图标，后面再调整

import { GlobalStateProvider } from "./globalState";

import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom' // 导入路由组件

import Label from './subPages/Label'
import Overview from './subPages/Overview'
import Predict from './subPages/Predict'
import RemoveUselessFrame from './subPages/RemoveUselessFrame'
import Cut from './subPages/Cut'
import LightStream from './subPages/LightStream'

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
          <Sider trigger={null} className="site-sider" collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<HighlightOutlined />}>
                <Link to="/label">标注</Link>
              </Menu.Item>

              <SubMenu key="sub1" icon={<ClearOutlined />} title="预处理">
                <Menu.Item key="2" icon={<DeleteOutlined />}>
                  <Link to="/removeuselessframe">去除无用帧</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ScissorOutlined />}>
                  <Link to="/cut">对标剪裁</Link>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" icon={<EyeOutlined />} title="结果">
                <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                  <Link to="/lightstream">光流视频</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<AimOutlined />}>
                  <Link to="/predict">xxxx</Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="6" icon={<AppstoreOutlined />}>
                <Link to="/overview">结果总览</Link>
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

                <Route path="/removeuselessframe">
                  <RemoveUselessFrame />
                </Route>

                <Route path="/cut">
                  <Cut />
                </Route>

                <Route path="/lightstream">
                  <LightStream />
                </Route>

                <Route path="/predict">
                  <Predict />
                </Route>

                <Route path="/overview">
                  <Overview />
                </Route>

                <Redirect to="/label"></Redirect>
              </Switch>
            </Content>
          </Layout>
        </BrowserRouter>

      </Layout>

      <BackTop />

    </GlobalStateProvider>
  );
}

export default App;
