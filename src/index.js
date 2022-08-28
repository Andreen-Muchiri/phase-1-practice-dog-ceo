console.log('%c HI', 'color: firebrick')
function ceo() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderImg(json))
  }

  function renderImg(images) {
    const list = document.getElementById('dog-breeds');
    const loc = document.querySelector('div')
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      loc.appendChild(img)
      list.appendChild(loc);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    ceo()
  })
