import React, {useEffect, useState} from 'react';
import WEEKCOMP from './weekcomp';
import { getDateStr, lastWeek, thisWeek, thisWeekSub, previousWeekShow, nextWeekShow} from '../functions/weekFunction';
import nextBtn from '../img/nextweekbtn.png'
import preBtn from '../img/preweekbtn.png'
import './weekshow.css';

// let today = new Date();
let thisWeekArr = thisWeekSub();
//console.log(thisWeekArr);
const weekShow = () => {
    const [week, setWeek] = useState;
    return(
        <div className="weekshowall">
            <div className="prearrow" onClick={previousWeekShow}>
                <img src={preBtn} alt="previous button" className="preweekbtn"></img>
            </div>
            <div className="days">
                <WEEKCOMP daynum={thisWeekArr[0]}></WEEKCOMP>
                <WEEKCOMP daynum={thisWeekArr[1]}></WEEKCOMP>
                <WEEKCOMP daynum={thisWeekArr[2]}></WEEKCOMP>
                <WEEKCOMP daynum={thisWeekArr[3]}></WEEKCOMP>
                <WEEKCOMP daynum={thisWeekArr[4]}></WEEKCOMP>
                <WEEKCOMP daynum={thisWeekArr[5]}></WEEKCOMP>
                <WEEKCOMP daynum={thisWeekArr[6]}></WEEKCOMP>
            </div>
            <div className="nextarrow" onClick={nextWeekShow}>
                <img src={nextBtn} alt="next button" className="nextweekbtn"></img>
            </div>
        </div>
    );
};
export default weekShow;