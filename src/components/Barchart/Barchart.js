import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { useTranslation } from "react-i18next";

export const Barchart = (props) => {

  const { t } = useTranslation();

  const data = props.data;

  const config = {
    
    data,
    xField: 'Name',
    yField: 'number',
    color: "#198754",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      Name: {
        alias: t("name"),
      },
      number: {
        alias:  t("number"),
      },
    },
    minColumnWidth: 30,
    maxColumnWidth: 30,
  };
  return <Column {...config} />;
};
