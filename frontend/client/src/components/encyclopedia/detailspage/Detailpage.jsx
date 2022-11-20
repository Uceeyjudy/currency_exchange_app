import React from 'react'
import EnCurrencyCh from '../encurrencychange/EnCurrencyCh'
import EnInfo from '../encyinfo/EnInfo'
import EnStat from '../enstat/EnStat';
import EnDetail from "../endetail/EnDetail";

const Detailpage = () => {
  return (
    <div>
      <EnInfo />
      <div>
        <EnCurrencyCh />

        <EnDetail  />
      </div>

      <EnStat />
    </div>
  );
}

export default Detailpage