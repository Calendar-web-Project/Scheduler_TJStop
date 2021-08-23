// 날짜 객체 받아서 문자열로 리턴하는 함수
export function getDateStr(myDate){
	return (myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate())
}

//  오늘로부터 1주일전 날짜 반환
export function lastWeek(){
    let d = new Date();
    let dayOfMonth = d.getDate();
    d.setDate(dayOfMonth - 7);
    return getDateStr(d);
}

export function lastMonth(){
    let d = new Date()
    let monthOfYear = d.getMonth()
    d.setMonth(monthOfYear - 1)
    return getDateStr(d)
}

export function thisWeek(){
    let weekArr = [];
    let d = new Date();
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

export function thisWeekSub(){
    let weekArr = [];
    let d = new Date();
    let dayOfThismonth = d;
    for(let i = 3; i > 0 ; i--){
        let d = new Date();
        let today = d;
        let preDay = new Date(today.setDate(today.getDate() - i));
        weekArr.push(preDay);
    }
    weekArr.push(dayOfThismonth);
    for(let i = 1; i <= 3 ; i++){
        let d = new Date();
        let today = d;
        let preDay = new Date(today.setDate(today.getDate() + i));
        weekArr.push(preDay);
    }
    return weekArr;

}

export function getDayNumber(num){
    let week = ['일요일', '월요일', '화요일', '수요일',' 목요일', '금요일', '토요일'];
    return week[num];
}