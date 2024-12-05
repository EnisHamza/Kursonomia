import { CopyrightOutlined } from "@ant-design/icons";
import React from "react";

function Footer() {
  return (
    <div className="text-center pb-3">
      <span style={{ fontWeight: "bold" }}>
        Copyright <CopyrightOutlined />, Kursonomia
      </span>
      , All Rights Reserved
    </div>
  );
}

export default Footer;
