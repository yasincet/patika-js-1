let fullName = prompt("Enter your full name");

let greeting = document.querySelector("#myName");
greeting.innerHTML = fullName;


function currentDate () { 
    
    let clock = document.querySelector("#myClock"); 
    let today = new Date (); 
    
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
    let day = days[today.getDay()]; 
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ` ${day}` 

    let currentTime = `${time}`
    clock.innerHTML = currentTime 

   
    setTimeout(currentDate, 1000) 

}

currentDate ();

