import CustomModal from "../Modal";
import { PageHeader } from "antd";
import React from "react";

function Header() {
  return (
    <PageHeader
      className="site-page-header"
      title="To-do-app"
      subTitle="A sample to do app"
      extra={[
        <CustomModal key={'modal buton'} />
      ]}
    />
  );
}

export default Header;
