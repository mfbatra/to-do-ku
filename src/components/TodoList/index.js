import { List, Spin } from "antd";

import React from "react";
import TodoItem from "../TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const data = useSelector((state) => state.todo.apiData);
  const loading = useSelector((state) => state.todo.loading);
  return (
    <>
      {loading && <Spin size="large" />}
      {!loading && <List bordered dataSource={data} renderItem={TodoItem} />}
    </>
  );
}

export default TodoList;
