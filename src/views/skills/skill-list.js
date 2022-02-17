import {nanoid} from 'nanoid';
import * as iconName from '../../components/icon/constants';

const getId = () => {
  return nanoid();
};

const skillList = [
  {
    id: getId(),
    name: 'React',
    iconSrc: iconName.REACT,
    color: 'rgb(38,209,254)',
  },
  {
    id: getId(),
    name: 'React-Native',
    iconSrc: iconName.REACT,
    color: 'rgb(38,209,254)',
  },
  {
    id: getId(),
    name: 'Redux',
    iconSrc: iconName.REACT,
    color: 'rgb(38,209,254)',
  },
  {
    id: getId(),
    name: 'Flutter',
    iconSrc: iconName.FLUTTER,
    color: 'rgb(59,158,215)',
  },

  {
    id: getId(),
    name: 'RESTful API',
    iconSrc: iconName.REST_API,
  },
  {
    id: getId(),
    name: 'Docker',
    iconSrc: iconName.DOCKER,
    color: 'rgb(50,139,232)',
  },
  {
    id: getId(),
    name: 'JavaScript',
    iconSrc: iconName.JAVASCRIPT,
    color: 'rgb(241,188,45)',
  },
  {
    id: getId(),
    name: 'Dart',
    iconSrc: iconName.DART,
    color: 'rgb(59,158,215)',
  },
  {
    id: getId(),
    name: 'Git',
    iconSrc: iconName.GITHUB,
  },
];

export default skillList;
