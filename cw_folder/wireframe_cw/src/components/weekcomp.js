import React, {useEffect, useState} from 'react';
import './weekcomp.css';
import Memoicon from '../img/memo.png'
import Vectoricon from '../img/vector.png'
import { getDateStr, lastWeek, thisWeek, thisWeekSub, getDayNumber } from '../functions/weekFunction';

const weekComp = (props) => {
    const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth()+1;
    // const date = today.getDate();
    const date = today.getDate();
    const day = today.getDay();
    let thisMonth = props.daynum.getMonth()+1;
    let thisDate = props.daynum.getDate();
    let thisDay = props.daynum.getDay();
    let whatDay = getDayNumber(thisDay);

    let isToday = (date == thisDate)? (day == thisDay)? true : false : false;
    // console.log(date);
    // console.log(thisDay);

    return(
        <div className="week_comp">
            <div className="dates">
                <p className="date">{thisMonth}월 {thisDate}일 {whatDay}</p>
                <div className={"todayicon" + " " + (isToday? 'right' : 'no')}>Today</div>
            </div>
            <div className="lists">
                <img src={Memoicon} alt="memo img" className="tasksicon" ></img>
                <em className="tasknumber">Show {} tasks</em>
                <img src={Vectoricon} alt="vector img" className="dropdownicon"></img>
            </div>
        </div>
    );
};
export default weekComp;