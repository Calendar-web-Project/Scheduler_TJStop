let weekArr = [];
let d = new Date();
let thisDay = d;

// 날짜 객체 받아서 문자열로 리턴하는 함수
export function getDateStr(myDate){
	return (myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate())
}

//  오늘로부터 1주일전 날짜 반환
export function lastWeek(){
    let dayOfMonth = d.getDate();
    d.setDate(dayOfMonth - 7);
    return getDateStr(d);
}

export function lastMonth(){
    let monthOfYear = d.getMonth();
    d.setMonth(monthOfYear - 1);
    return getDateStr(d);
}

export function thisWeek(){
    let weekArr = [];
    let dayOfThismonth = d.getDate();
    for(let i = 3; i > 0 ; i--){
        let today = d;
        today.setDate(dayOfThismonth - i);
        let date = today.getDate();
        weekArr.push(date);
    }
    weekArr.push(dayOfThismonth);
    for(let i = 1; i <= 3 ; i++){
        let today = d;
        today.setDate(dayOfThismonth + i);
        let date = today.getDate();
        weekArr.push(date);
    }
    return weekArr;

}

export function thisWeekSub(dayGive){
    let day = dayGive;
    console.log(day);
    let dayOfThismonth = d;
    for(let i = 3; i > 0 ; i--){
        let setDay = new Date(thisDay.setDate(thisDay.getDate()));
        let preDay = new Date(setDay.setDate(setDay.getDate() - i));
        weekArr.push(preDay);
    }
    weekArr.push(dayOfThismonth);
    for(let i = 1; i <= 3 ; i++){
        let setDay = new Date(thisDay.setDate(thisDay.getDate()));
        let nextDay = new Date(setDay.setDate(setDay.getDate() + i));
        weekArr.push(nextDay);
    }
    console.log(weekArr);
    return weekArr;

}

export function getDayNumber(num){
    let week = ['일요일', '월요일', '화요일', '수요일',' 목요일', '금요일', '토요일'];
    return week[num];
}

export function previousWeekShow(){
    console.log("previous event!!");
    let thisweek = weekArr[3];
    weekArr = [];
    thisDay = new Date(thisDay.setDate(thisDay.getDate() - 7));
    thisWeekSub(thisDay);

}
export function nextWeekShow(){
    console.log('next event!');
    let thisweek = weekArr[3];
    weekArr = [];
    thisDay = new Date(thisDay.setDate(thisDay.getDate() + 7));
    thisWeekSub(thisDay);
}