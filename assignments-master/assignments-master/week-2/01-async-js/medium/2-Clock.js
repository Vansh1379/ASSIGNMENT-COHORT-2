  

// function clock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
    
//     let ampm = hours >=12 ? "PM" : "AM";
//     hours =  hours < 10 ? "0" + hours : hours;
//     minute = minute<10 ? "0" + minute : minute;
//     second = second<10 ? "0" + second : second;
    
//     console.log(`${hours}:${minute}:${second}`);
// }

// setInterval(clock , 1000);

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let ampm = hours>=12 ? "PM" : "AM";
    hours = hours<10 ? "0"+hours : hours;
    minute = minute<10 ? "0"+minute : minute ;
    second = second<10 ? "0" +second :second;

    console.log(`${hours}:${minute}:${second}`);
}


    setInterval(clock , 1000);
