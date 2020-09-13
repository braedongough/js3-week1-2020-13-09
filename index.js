const body = document.querySelector('body')

const data = fetch('https://cat-fact.herokuapp.com/facts/random?amount=3')
  .then((response) => response.json())
  .then((data) =>
    data.forEach((catFact) => {
      const h2 = document.createElement('h2')
      h2.innerHTML = catFact.text

      body.appendChild(h2)
    })
  )
