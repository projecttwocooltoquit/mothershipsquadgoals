const editSquad = () => {
  // need to add the user id here somehow?
  document.location.replace('/teambuilder');
};

const getHighscores = () => {
  document.location.replace('/highscores');
};

const commenceBattle = () => {
  document.location.replace('/battle');
};

document.querySelector('#editsquad-btn').addEventListener('click', editSquad);
document
  .querySelector('#highscores-btn')
  .addEventListener('click', getHighscores);
document.querySelector('#battle-btn').addEventListener('click', commenceBattle);
