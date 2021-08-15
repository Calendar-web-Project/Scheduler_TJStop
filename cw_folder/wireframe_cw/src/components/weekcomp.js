import React, {useEffect, useState} from 'react';
import './weekcomp.css';
import Memoicon from '../img/memo.png'
import Vectoricon from '../img/vector.png'

const weekComp = (tasks, daynum) => {
    const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth()+1;
    // const date = today.getDate();
    const day = today.getDay();

    if (daynum == day){

    }
    return(
        <div className="week_comp">
            <div className="dates">
                <p className="date">{today.getMonth()}월 {today.getDate()}일 {day}</p>
                <div className="todayicon"></div>
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