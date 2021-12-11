import { Col, Row } from "antd";
import React, { useEffect } from "react";

import TodoList from "../components/TodoList";
import { fetchTodoList } from "../store/todoslice";
import { useDispatch } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col span={24}>
          <TodoList />
        </Col>
      </Row>
    </>
  );
};

export default Todo;
