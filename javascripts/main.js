import tank from './components/tank.js';
import graveyard from './components/graveyard.js';
import personData from './helpers/data/personData.js';


const sharkAttackEvent = () => {

personData.randomMurder();
  tank.tankBuilder();
  graveyard.buildGraveyard();

}

const reviveEvent = (e)=> {
  const personID = e.target.id;
  personData.bringToLife(personID);
  tank.tankBuilder();
  graveyard.buildGraveyard();
}


const init = () =>{
  tank.tankBuilder();
  graveyard.buildGraveyard();
  $('#bite-me').click(sharkAttackEvent);
  $('body').on('click', '.revive-btn', reviveEvent);
};

init();