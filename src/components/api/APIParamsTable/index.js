import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

function Row({ param, description, optional, dataType }) {
  let optionalEl = "";
  if (optional) {
    optionalEl = <Translate>com.api_params.optional</Translate>;
  }
  return (
    <tr className={styles.tr}>
      <th className={clsx(styles.td, styles.th)}>
        <code className={styles.name}>{param}</code>
      </th>
      <td className={styles.td}>{dataType}</td>
      <td className={styles.td}>
        {optionalEl}
        {description}
      </td>
    </tr>
  );
}

export default function APIParamsTable({ paramType, params }) {
  const json = params;
  const params_list = JSON.parse(json);
  return (
    <section className={clsx("meta-panel", styles.panel)}>
      <h3 className={styles.title}>
        {paramType == "request" ? (
          <Translate>com.api_params.request</Translate>
        ) : (
          <Translate>com.api_params.response</Translate>
        )}
      </h3>
      <table className={clsx("meta-panel-table", styles.table)}>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <th className={styles.th_header}> Parameter </th>
            <td className={styles.th_header}> Type </td>
            <td className={styles.th_header}> Description </td>
          </tr>
          {params_list.map((item, idx) => (
            <Row
              key={idx}
              param={item.param}
              description={item.description}
              dataType={item.dataType}
              optional={item.optional}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
