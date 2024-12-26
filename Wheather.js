// "https://api.openweathermap.org/data/2.5/weather?units=metrics&q="


const apikey = "5be81e1b4343e8a06045b4471e2ed606"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox = document.getElementById("input");
const searchbtn = document.getElementById("search");
const img = document.getElementById("whtpic");
const home = document.getElementById("#mainhome");




async function CheckWeather(city){
    const response = await fetch(apiurl +city + `&appid=${apikey}`);
    var data = await response.json();


    console.log(data);



    if(searchbox.value == 0){
        document.querySelector("#phone1").style.display="block"
        document.getElementById("mainhome").style.display="none";
    }
    else{


        


        document.querySelector("#city").innerHTML=data.name;
        document.querySelector("#deg").innerHTML=Math.round(data.main.temp)+ '°C';
        document.querySelector("#per").innerHTML=data.main.humidity + '%';
        document.querySelector("#per1").innerHTML=data.wind.speed + 'km/h';

        if(data.weather[0].main == "Cloud"){
            img.src = "Wheatherimages/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            img.src ="Wheatherimages/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            img.src ="Wheatherimages/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            img.src ="Wheatherimages/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            img.src ="Wheatherimages/mist.png"
        }
        document.getElementById("mainhome").style.display="block";
        document.querySelector("#phone1").style.display="none"
    }
}



searchbtn.addEventListener("click", () =>{
    CheckWeather(searchbox.value);
})




