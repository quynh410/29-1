const form =  document.getElementById("playerName")

form.addEventListener("submit", function (e) {
e.preventDefault()

  let playerNameInput = document.getElementById('playerName');
  let playerName = playerNameInput.value.trim();

  if (playerName !== "") {
    let playerId = Date.now().toString();

    let player = {
      id: playerId,
      name: playerName
    };

    const existingPlayers = JSON.parse(localStorage.getItem('footballPlayers')) || [];
    existingPlayers.push(player);

    localStorage.setItem('footballPlayers', JSON.stringify(existingPlayers));

    playerNameInput.value = '';

    displayPlayers();
  }


function displayPlayers() {
  var playerListContainer = document.getElementById('playerList');
  playerListContainer.innerHTML = ''; 

  var players = JSON.parse(localStorage.getItem('footballPlayers')) || [];

  players.forEach(function(player) {
    var listItem = document.createElement('li');
    listItem.textContent = player.name;
    playerListContainer.appendChild(listItem);
  });
}

displayPlayers();
});