import {
  CheckCircleTwoTone,
  ExclamationCircleOutlined,
} from "@ant-design/icons/lib/icons";
import { Col, List, Row, Typography } from "antd";

import React from "react";

const TodoItem = (item) => {
  return (
    <List.Item>
      <Row style={{ width: "100%" }}>
        <Col span={18}>
          <Typography.Text>{item.title}</Typography.Text>
        </Col>
        <Col span={6}>
          {item.completed === true ? (
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{ fontSize: "30px" }}
            />
          ) : (
            <ExclamationCircleOutlined style={{ fontSize: "30px" }} />
          )}
        </Col>
      </Row>
    </List.Item>
  );
};

export default TodoItem;
