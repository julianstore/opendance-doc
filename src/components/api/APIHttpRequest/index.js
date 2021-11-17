import React from "react";
import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

export default function APIHttpRequest({ requestType, url, description }) {
  return (
    <div className={styles.container}>
      <h3>
        <Translate>com.api_httprequest</Translate>
      </h3>
      <CodeBlock
        className={`language-sass`}
      >{`${requestType}  ${url}`}</CodeBlock>
      <h6>Description: </h6>
      {description}
    </div>
  );
}
