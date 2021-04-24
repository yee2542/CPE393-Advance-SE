import { Layout } from "antd";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Body from "./Container";
import Sider from "./Sider";

export interface HomeLayoutProps {
  collapse?: boolean;
}

const HomeContainer: React.FC<HomeLayoutProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(props.collapse || false);
  const toggle = () => setCollapsed((s) => !s);

  return (
    <Layout style={{ height: "100vh" }}>
      <Navbar title="OUM" onClick={toggle} />

      <Sider collapsed={collapsed} />
      <Body collapsed={collapsed} toggle={toggle}>
        {props.children}
      </Body>
    </Layout>
  );
};

export default HomeContainer;
