function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icons/${player1}.svg" title="${player1}" alt="Bandeira ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icons/${player2}.svg" title="${player2}" alt="Bandeira ${player2}">
    </li>
  `
}

let delay = -0.3

function createCard(date, day, game) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2 class="card-title">${date} <span class="card-title">${day}</span></h2>
      <ul>
        ${game}      
       </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard('20/11', 'domingo', createGame('qatar', '12:00', 'cameroon')) +
  createCard(
    '21/11',
    'segunda',
    createGame('england', '09:00', 'iran') +
      createGame('senegal', '12:00', 'netherlands') +
      createGame('united states', '15:00', 'wales')
  )
