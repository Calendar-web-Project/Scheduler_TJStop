import React, {useEffect, useState} from 'react';
import WEEKCOMP from './weekcomp';
import { getDateStr, lastWeek, thisWeek, thisWeekSub, previousWeekShow, nextWeekShow} from '../functions/weekFunction';
import nextBtn from '../img/nextweekbtn.png'
import preBtn from '../img/preweekbtn.png'
import './weekshow.css';

let today = new Date();
let thisWeekArr = thisWeekSub(today);
//console.log(thisWeekArr);
const WeekShow = () => {
    let [setweek, weekChange] = useState(thisWeekArr);
    function preWeekGo(){
        var newWeek = [...setweek];
        newWeek = previousWeekShow();
        weekChange(newWeek);
    }
    function nextWeekGo(){
        var newWeek = [...setweek];
        newWeek = nextWeekShow();
        weekChange(newWeek);
    }
    return(
        <div className="weekshowall">
            <div className="prearrow" onClick={preWeekGo}>
                <img src={preBtn} alt="previous button" className="preweekbtn"></img>
            </div>
            <div className="days">
                <WEEKCOMP daynum={setweek[0]}></WEEKCOMP>
                <WEEKCOMP daynum={setweek[1]}></WEEKCOMP>
                <WEEKCOMP daynum={setweek[2]}></WEEKCOMP>
                <WEEKCOMP daynum={setweek[3]}></WEEKCOMP>
                <WEEKCOMP daynum={setweek[4]}></WEEKCOMP>
                <WEEKCOMP daynum={setweek[5]}></WEEKCOMP>
                <WEEKCOMP daynum={setweek[6]}></WEEKCOMP>
            </div>
            <div className="nextarrow" onClick={nextWeekGo}>
                <img src={nextBtn} alt="next button" className="nextweekbtn"></img>
            </div>
        </div>
    );
};
export default WeekShow;