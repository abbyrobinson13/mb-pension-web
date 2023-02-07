import React, { useState } from 'react';
import { getCompanyInfo } from './getCompanyInfo';

const Test = async () => {
  const [info, setInfo] = useState([]);
  const getInfo = async () => {
    const companydata = await getCompanyInfo();
    setInfo(companydata.data());
    console.log(companydata.data());
  };
  return <span>{await getInfo()}</span>
};

export default Test;
