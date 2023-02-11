//import { heroes } from './data/heroes';

import heroes, { owners } from '../data/heroes';

console.log(owners);


const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id)
}


const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)
console.log(getHeroesByOwner("DC"));
