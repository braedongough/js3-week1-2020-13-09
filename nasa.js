const body = document.querySelector('body')

fetch('http://api.open-notify.org/astros.json')
  .then((response) => response.json())
  .then((data) => {
    const h1 = document.createElement('h1')
    h1.innerHTML = `There are ${data.number} astronauts in space, they are:`
    body.appendChild(h1)

    data.people.forEach((person) => {
      const h3 = document.createElement('h3')

      h3.innerHTML = person.name
      body.appendChild(h3)
    })
  })
