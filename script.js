const input = document.querySelector('input')
const grid = document.getElementsByClassName('img-grid')[0];
const i = document.querySelector('#start')


i.addEventListener('click', sendRequests)

window.addEventListener('load', isDay)

input.addEventListener('keypress', function write(e) {
    if (e.key === 'Enter') {
        sendRequests()     
        if (input.value === '') {
        alert('write')
        }
    } 
   
 
})

function sendRequests() {
    clearImg()
    let url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
 
    
    fetch(url)
    .then(responce => {
        if (responce.ok) {
            return responce.json()
        } else {
            alert(responce.status);
        }
        
    })
    .then((data) => {
      console.log(data);
       const arr = []
       for (let i = 0; i < data.results.length; i++) {
           arr[i] = document.createElement('div')
           arr[i].className = 'img'
           arr[i].style.backgroundImage = 'url(' + data.results[i].urls.raw + ')'
           grid.appendChild(arr[i])
       } 
    }
    )}


function clearImg() {
    grid.innerHTML = ''
}

function isDay() {
    const body = document.querySelector('body')
    const time = new Date()
    let hours = time.getHours()
    if (hours >= 8) {
        body.style.backgroundColor = 'white'
        document.querySelector('h2').style.color = 'black'
    } 
     if (hours >= 19) {
        body.style.backgroundColor = 'black'
        document.querySelector('h2').style.color = 'white'
    }

}

function colorCameras() {
    const ImgCamera = document.querySelector('.fa-camera')
    let namber = Math.floor(Math.random() * 255)
    let ber = Math.floor(Math.random() * 255)
    let na = Math.floor(Math.random() * 255)
    ImgCamera.style.color = 'rgb'+'(' + namber + ',' + ber + ',' + na + ')'  
}

colorCameras()

