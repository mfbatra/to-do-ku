import React, { useState } from "react";

import AddTodoItemForm from "./AddTodoItemForm";
import Modal from "antd/lib/modal/Modal";
import { PlusCircleOutlined } from "@ant-design/icons/lib/icons";

function CustomModal({ icon }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="add new to do item"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <AddTodoItemForm handleClose={handleCancel} />
      </Modal>
      <div
        onClick={showModal}
        style={{ fontSize: "40px", cursor: "pointer" }}
        data-testid="addIcon"
      >
        {icon}
      </div>
    </>
  );
}
CustomModal.defaultProps = {
  icon: <PlusCircleOutlined />,
};

export default CustomModal;
