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
import { Interactive2 } from './components/screens/interactives/Interactive2';
import { Interactive3 } from './components/screens/interactives/Interactive3';
import { Description1 } from './components/screens/descriptions/Description1';
import { Description2 } from './components/screens/descriptions/Description2';
import { Description3 } from './components/screens/descriptions/Description3';
import { Prefinal } from './components/screens/Prefinal';
import { Final } from './components/screens/Final';
import { PreInteract2 } from './components/screens/interactives/Interactive2/PreInteract2';
import { PreInteract1 } from './components/screens/interactives/Interactive1/PreInteract1';
import { PreInteract3 } from './components/screens/interactives/Interactive3/PreInteract3';
import { PostInteract3 } from './components/screens/interactives/Interactive3/PostInteract3';
import {
  woodBg,
  bgInteract3,
  bgInteract1,
  alice,
  denis,
  pauline,
  andrew,
  aliceBedroom,
  denisBedroom,
  paulineBedroom,
  andrewBedroom,
  aliceKitchen,
  denisKitchen,
  paulineKitchen,
  andrewKitchen,
  femaleWardrobe,
  maleWardrobe,
  axenixFirst,
  axenixOffice8,
  axenixOffice,
  axenixOffice2,
  axenixOffice5,
  axenixOffice3,
  axenixOffice7,
  axenixOffice4,
  axenixOffice6,
  axenixOffice9,
  axenixOffice10,
  axenixOffice11,
  hall,
  square,
  manCeo,
  kirill,
  present,
  bus,
  boxClosed
} from './constants/images';
import box_open from './components/screens/interactives/Interactive1/svg/box_open.svg';
import puzzleBoard from './components/screens/interactives/Interactive2/svgs/puzzleBoard.svg';
import board from './components/screens/interactives/Interactive2/svgs/board.svg';
import boardWin from './components/screens/interactives/Interactive2/svgs/boardWin.svg';
import cakeFinished from './components/screens/interactives/Interactive3/svg/cakeFinished.svg';
import cake from './components/screens/interactives/Interactive3/svg/cake.svg';
import cakeStart from './components/screens/interactives/Interactive3/svg/cakeStart.svg';
import finalSvg from './components/screens/interactives/Interactive3/svg/final.svg';

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
    preloadImages: [andrew, alice, denis, pauline, aliceBedroom, denisBedroom, paulineBedroom, andrewBedroom]
  },
  {
    name: 'question-0',
    component: Question0,
    type: ScreenType.Question,
    preloadImages: []
  },
  {
    name: 'question-1',
    component: Question1,
    type: ScreenType.Question,
    preloadImages: {
      '1': [femaleWardrobe, aliceKitchen],
      '2': [maleWardrobe, andrewKitchen],
      '3': [femaleWardrobe, paulineKitchen],
      '4': [maleWardrobe, denisKitchen],
      'all': [femaleWardrobe, maleWardrobe, aliceKitchen, denisKitchen, paulineKitchen, andrewKitchen]
    }
  },
  {
    name: 'question-2',
    component: Question2,
    type: ScreenType.Question,
    preloadImages: [bus, hall, square],
  },
  {
    name: 'question-3',
    component: Question3,
    type: ScreenType.Question,
    preloadImages: [axenixFirst, kirill],
    
  },
  {
    name: 'question-4',
    component: Question4,
    type: ScreenType.Question,
    preloadImages: [bgInteract1, boxClosed]
  },
  {
    name: 'question-5',
    component: Question5,
    type: ScreenType.Question,
    preloadImages: [box_open]
  },
  {
    name: 'game-1-1',
    component: PreInteract1,
    type: ScreenType.Game,
    preloadImages: [axenixOffice, axenixOffice2, axenixOffice3]
  },
  {
    name: 'game-1',
    component: Interactive1,
    type: ScreenType.Game,
    preloadImages: [],
  },
  {
    name: 'question-6',
    component: Question6,
    type: ScreenType.Question,
    preloadImages: [woodBg, puzzleBoard, board, boardWin],
  },
  {
    name: 'game-2-1',
    component: PreInteract2,
    type: ScreenType.Game,
    preloadImages: [axenixOffice4, axenixOffice5, axenixOffice6],
  },
  {
    name: 'game-2',
    component: Interactive2,
    type: ScreenType.Game,
    preloadImages: [],
  },
  {
    name: 'question-7',
    component: Question7,
    type: ScreenType.Question,
    preloadImages: [axenixOffice7, axenixOffice8],
  },
  {
    name: 'question-8',
    component:  Question8,
    type: ScreenType.Question,
    preloadImages: [axenixOffice9, manCeo],
  },
  {
    name: 'question-9',
    component:  Question9,
    type: ScreenType.Question,
    preloadImages: [axenixOffice10],
  },
  {
    name: 'descr-1',
    component:  Description1,
    type: ScreenType.Description,
    preloadImages: [bgInteract3, cakeStart, cake, finalSvg],
    dependentQuestion: {
      id: '9',
      answers: ['1', '3']
    }
  },
  {
    name: 'descr-2',
    component:  Description2,
    type: ScreenType.Question,
    preloadImages: [cakeFinished, axenixOffice11, present],
  },
  {
    name: 'descr-3',
    component: Description3,
    type: ScreenType.Description,
    preloadImages: [],
    dependentQuestion: {
      id: '3',
      answers: ['3', '4']
    }
  },
  {
    name: 'question-10',
    component:  Question10,
    type: ScreenType.Question,
    preloadImages: [],
  },
  {
    name: 'question-11',
    component:  Question11,
    type: ScreenType.Question,
    preloadImages: [],
  },
  {
    name: 'game-3-1',
    component: PreInteract3,
    type: ScreenType.Game,
    preloadImages: [],
  },
  {
    name: 'game-3',
    component: Interactive3,
    type: ScreenType.Game,
    preloadImages: [],
  },
  {
    name: 'game-3-2',
    component: PostInteract3,
    type: ScreenType.Game,
    preloadImages: [],
  },
  {
    name: 'question-12',
    component:  Question12,
    type: ScreenType.Question,
    preloadImages: [],
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