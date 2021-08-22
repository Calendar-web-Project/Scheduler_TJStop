import React, {useEffect, useState} from 'react';
import WEEKCOMP from './weekcomp';
import { getDateStr, lastWeek, thisWeek, thisWeekSub } from '../functions/weekFunction';

let thisWeekArr = thisWeekSub();
console.log(thisWeekArr);
const weekShow = () => {
    return(
        <div>
            <WEEKCOMP daynum={thisWeekArr[0]}></WEEKCOMP>
            <WEEKCOMP daynum={thisWeekArr[1]}></WEEKCOMP>
            <WEEKCOMP daynum={thisWeekArr[2]}></WEEKCOMP>
            <WEEKCOMP daynum={thisWeekArr[3]}></WEEKCOMP>
            <WEEKCOMP daynum={thisWeekArr[4]}></WEEKCOMP>
            <WEEKCOMP daynum={thisWeekArr[5]}></WEEKCOMP>
            <WEEKCOMP daynum={thisWeekArr[6]}></WEEKCOMP>
        </div>
    );
};
export default weekShow;