import { Intro } from './components/screens/Intro';
import { Question0 } from './components/screens/questions/Question0';
import { Question1 } from './components/screens/questions/Question1';
import { Question2 } from './components/screens/questions/Question2';
import { Question3 } from './components/screens/questions/Question3';
import { Question4 } from './components/screens/questions/Question4';
import { Question5 } from './components/screens/questions/Question5';
import { Question6 } from './components/screens/questions/Question6';
import { Question7 } from './components/screens/questions/Question7';
import { Question8 } from './components/screens/questions/Question8';
import { Question9 } from './components/screens/questions/Question9';
import { Question10 } from './components/screens/questions/Question10';
import { Question11 } from './components/screens/questions/Question11';
import { Question12 } from './components/screens/questions/Question12';
import { Interactive1 } from './components/screens/interactives/Interactive1';
import { Interactive2 } from './components/screens/interactives/Interactive2/Interactive2';
import { Interactive3 } from './components/screens/interactives/Interactive3';
import { Description1 } from './components/screens/descriptions/Description1';
import { Description2 } from './components/screens/descriptions/Description2';
import { Description3 } from './components/screens/descriptions/Description3';
import { Prefinal } from './components/screens/Prefinal';
import { Final } from './components/screens/Final';


export const ScreenType = {
  Intro: 'intro',
  Question: 'question',
  Final: 'final',
  Game: 'game',
  Description: 'Description',
};

export const screens = [
  {
    name: 'intro',
    component: Intro,
    type: ScreenType.Intro,
    preloadImages: []
  },
  {
    name: 'question-0',
    component: Question0,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'game-1',
    component: Interactive1,
    type: ScreenType.Game,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'game-2',
    component: Interactive2,
    type: ScreenType.Game,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-8',
    component:  Question8,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-9',
    component:  Question9,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-10',
    component:  Question10,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'descr-1',
    component:  Description1,
    type: ScreenType.Description,
    preloadImages: [],
    image: [],
    dependentQuestion: {
      id: '9',
      answers: ['1', '3']
    }
  },
  {
    name: 'descr-2',
    component:  Description2,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'descr-3',
    component: Description3,
    type: ScreenType.Description,
    preloadImages: [],
    image: [],
    dependentQuestion: {
      id: '3',
      answers: ['3', '4']
    }
  },
  {
    name: 'question-11',
    component:  Question11,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'game-3',
    component:  Interactive3,
    type: ScreenType.Game,
    preloadImages: [],
    image: []
  },
  {
    name: 'question-12',
    component:  Question12,
    type: ScreenType.Question,
    preloadImages: [],
    image: []
  },
  {
    name: 'final-1',
    component: Prefinal,
    type: ScreenType.Final,
  },
  {
    name: 'final-2',
    component: Final,
    type: ScreenType.Final,
  },
];