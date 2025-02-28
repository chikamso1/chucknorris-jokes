const jokes = document.querySelector('.joke');
const jokeBtn = document.querySelector('#joke-btn');
const container = document.querySelector('.container');

const xhr = new XMLHttpRequest();

function getJoke() {
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200){
    
    const data = JSON.parse(this.responseText);
    if(!container.querySelector('.icon')) {

    const img = document.createElement('img');
    img.classList = 'icon';
    img.src = data.icon_url;
    img.alt = 'icon';
    container.insertBefore(img, container.firstChild);

    }
    jokes.innerHTML = data.value;
  }else{
    jokes.innerHTML = 'something went wrong';
  }
}
xhr.send();
}


jokeBtn.addEventListener('click', getJoke);

