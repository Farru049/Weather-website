var inputvalue=document.querySelector('#cityInput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var desc=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');

apik="6918d48353997d638332838f17db666b"
function convertion(val){
  return (val-273).toFixed(3)
}

btn.addEventListener('click',function(){
  
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik).then(res=>res.json())
  .then(data=>{
    var nameval= data['name']
    var descrip=data['weather']['0']['description']
    var temperature=data['main']['temp']
    var wndspeed=data['wind']['speed']

    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML=`Temperature: <span>${convertion(temperature)}C<span>`
    description.innerHTML=`Sky Condition: <span>${descrip}<span>`
    wind.innerHTML=`wind speed: <span>${wndspeed}<span>`
  })

  .catch(err=> alert('You entered wrong city name'))
})