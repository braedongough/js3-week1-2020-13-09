const body = document.querySelector('body')
const img = document.createElement('img')
body.appendChild(img)
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((data) => {
//     img.src = data.message
//   })
// 2. Get a new image every 2 sec.
// setInterval(() => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((data) => {
//       img.src = data.message
//     })
// }, 2000)
// 3. Get the list of all breeds from https://dog.ceo/api/breeds/list/all
function getDogBreeds() {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
      console.log('this code is updatings')
      dogBreeds = Object.keys(data.message)
    })
}
//4 https://dog.ceo/api/breed/<BREEDNAME>/images/random
const randomNumber = Math.floor(Math.random() * Math.floor(94))
const div = document.createElement('div')
body.appendChild(div)
let dogBreeds = []
fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((data) => {
    dogBreeds = Object.keys(data.message)
  })
  .then(() => {
    fetch(`https://dog.ceo/api/breed/${dogBreeds[randomNumber]}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        div.innerHTML = dogBreeds[randomNumber]
        img.src = data.message
      })
  })
