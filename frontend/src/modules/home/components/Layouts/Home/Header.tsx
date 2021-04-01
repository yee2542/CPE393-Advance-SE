import { LinkOutlined, MenuOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import React from "react";

const HeaderCSS: React.CSSProperties = {
  background: "#fff",
  width: "100vw",
  position: "absolute",
  zIndex: 1,
};

const LogoCSS: React.CSSProperties = {
  margin: 0,
  height: 50,
  marginTop: 7,
  textAlign: "center",
};

const { Header: HeaderAnt } = Layout;

const Header: React.FC<{ collapsed: boolean; toggle: () => void }> = (
  props
) => {
  return (
    <HeaderAnt style={HeaderCSS}>
      <Row justify="start" align="middle" style={{ height: 64 }}>
        <Col span={1}>
          <MenuOutlined
            onClick={props.toggle}
            style={{ marginLeft: -24, fontSize: 24, marginTop: 20 }}
          />
        </Col>
        <Col span={2} offset={1}>
          <Row style={LogoCSS} justify="space-between" align="middle">
            <Col span={8} style={{ marginTop: -2 }}>
              <LinkOutlined style={{ fontSize: 30 }} />
            </Col>
            <Col
              span={3}
              style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: -14,
              }}
            >
              <div>OUM</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </HeaderAnt>
  );
};

export default Header;
