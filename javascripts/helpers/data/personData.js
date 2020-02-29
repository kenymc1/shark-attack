const persons = [
  { id: 'person1', name: 'zoe Ames', isDead: false },
  { id: 'person2', name: 'Aaron Lain', isDead: false },
  { id: 'person3', name: 'Anca Simon', isDead: false },
  { id: 'person4', name: 'Beth Nielsen', isDead: false },
  { id: 'person5', name: 'Bethany Whitworth', isDead: false },
  { id: 'person6', name: 'Christopher Johnson', isDead: false },
  { id: 'person7', name: 'David Everett', isDead: false },
  { id: 'person8', name: 'Dylan Rowe', isDead: false },
  { id: 'person9', name: 'Joey Petrone', isDead: false },
  { id: 'person10', name: 'John Fleming', isDead: false },
  { id: 'person11', name: 'Jose Marquez', isDead: false },
  { id: 'person12', name: 'Kayla Melton', isDead: false },
  { id: 'person13', name: 'Kenneth McEastland', isDead: false },
  { id: 'person13', name: 'Liza Star', isDead: false },
  { id: 'person14', name: 'Michele Rawlins', isDead: false },
  { id: 'person15', name: 'Monique Bass', isDead: false },
  { id: 'person16', name: 'Ola Oladinni', isDead: false },
  { id: 'person17', name: 'Sarah Holder', isDead: true },
  { id: 'person18', name: 'Stephen Castaneda', isDead: true },
  { id: 'person19', name: 'Steven Zelenak', isDead: true},
  { id: 'person20', name: 'Todd Spainhour', isDead: true },
  { id: 'person21', name: 'Zachary Crumpton', isDead: false },
 
]


const getAlivePersons = () => {
  return persons.filter((x) => x.isDead === false);
};

const getDeadPersons = () => {
  return persons.filter((x) => x.isDead === true);
};
const randomMurder = () => {
const alivePeople = getAlivePersons();
const randomNum = Math.floor(Math.random()* alivePeople.length)
const deadPersonsId = alivePeople[randomNum].id;
const deadMan = persons.findIndex((x)=> x.id === deadPersonsId);

persons[deadMan].isDead = true;
  
};

const bringToLife = (personID) => {
 
  const itLives = persons.findIndex((x) => x.id === personID);
  persons[itLives].isDead = false;
  
}

export default { getAlivePersons, getDeadPersons, randomMurder, bringToLife };