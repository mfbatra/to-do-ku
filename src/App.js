import { Col, Row } from "antd";

import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import Todo from "./pages/Todo";

function App() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Header />
          <Todo />
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
