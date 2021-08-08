import React, { useState, useRef } from 'react';
import imgd from '../img/Day.png';
import imgw from '../img/Week.png';
import imgm from '../img/Month.png';

let pages = document.querySelector('.pageimg');

function rotateStart(){
    console.log(pages);
}
setInterval(() => {
    rotateStart()
}, 3000);

const page_animate = () => {
    return(
        <div>
            <img src={imgd} className="pageimg, page_one"/>
            <img src={imgw} className="pageimg, page_two"/>
            <img src={imgm} className="pageimg, page_three"/>
        </div>
    );
};

export default page_animate;