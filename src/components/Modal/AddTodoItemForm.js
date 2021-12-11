import { Button, Form, Input } from "antd";

import React from "react";
import { addTodoListItem } from "../../store/todoslice";
import { useDispatch } from "react-redux";

function AddTodoItemForm({ handleClose }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const { text } = values;
    dispatch(addTodoListItem(text));
    handleClose();
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    // console.error("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Todo task"
        name="text"
        rules={[
          {
            whitespace: true,
            required: true,
            message: "Please enter the todo item!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddTodoItemForm;
