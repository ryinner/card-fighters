import archerImage from '../assets/archer.jpg';
import doctorImage from '../assets/doctor.png';
import druidImage from '../assets/druid.png';
import knightImage from '../assets/knight.jpg';
import { ActionsTypes } from '../types/actions.type';
import type { Card } from '../types/cards.type';

const cardsMap: Card[] = [
    {
        id: 1,
        name: 'Knight',
        type: 'warrior',
        description: 'the best warrior in the kingdom',
        image: knightImage,
        coast: 2,
        healthPoints: 15,
        actions: [{name: ActionsTypes.attack, quantity: 3, power: 3}]
    },
    {
        id: 2,
        name: 'Doctor',
        type: 'healer',
        description: 'the best healer in the kingdom',
        image: doctorImage,
        coast: 3,
        healthPoints: 6,
        actions: [{name: ActionsTypes.attack, quantity: 2}, {name: ActionsTypes.heal, quantity: 2, power: 2}]
    },
    {
        id: 3,
        name: 'Druid',
        type: 'warrior',
        description: 'don\'t touch his flowers...',
        image: druidImage,
        coast: 4,
        healthPoints: 10,
        actions: [{name: ActionsTypes.attack, quantity: 1, power: 6}]
    },
    {
        id: 4,
        name: 'Archer',
        type: 'warrior',
        description: 'the best archer even after death',
        image: archerImage,
        coast: 4,
        healthPoints: 6,
        actions: [{name: ActionsTypes.attack, quantity: 6, power: 1}]
    }
];

export default cardsMap;
