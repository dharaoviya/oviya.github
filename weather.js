let inputEle=document.querySelector("input")
let btn=document.querySelector("button")
let output=document.querySelector("#output")

btn.addEventListener("click",async()=>{
    output.innerHTML=""
    let keys="be269b91161c981bd01f6a300ee086db"
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputEle.value}&appid=${keys}`)
    console.log(response);

    if(response.status==200){
        let data=await response.json()   // get all the information 
        console.log(data);

        let city=document.createElement('h3')
        city.innerHTML=`city Name ${data.name}`
        output.append(city)

        let temperature=document.createElement('h3')
        temperature.innerHTML=`temperature ${parseInt (data.main.temp -273)}℃`
        output.append(temperature)

        let wind=document.createElement('h3')
        wind.innerHTML=`wind ${data.wind.speed} km/hr`
        output.append(wind)

        let climate=document.createElement('h3')
        climate.innerHTML=`climate ${data.weather[0].main}`

        output.append(climate)
        
        
    }else if(response.status==404){
        let errEle=document.createElement(`b3`)
        errEle.innerHTML="city not found, enter the proper city name"
        output.append(errEle)
    }
    inputEle.value=""

})