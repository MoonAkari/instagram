import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faCompass,
  faHeart,
  faPaperPlane,
  faSquarePlus,
  faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
  faGear,
  faRepeat,
  faPaperPlane as paperPlaneDark,
  faCompass as compassDark,
  faSquarePlus as squareDark,
  faHeart as heartDark,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

export const MENU_ITEMS = [
  {
    title: 'Profile',
    icon: <FontAwesomeIcon icon={faUserCircle} />,
    to: '/@monmotion',
  },
  {
    title: 'Saved',
    icon: <FontAwesomeIcon icon={faBookmark} />,
    to: '/saved ',
  },
  {
    title: 'Setting',
    icon: <FontAwesomeIcon icon={faGear} />,
    to: '/setting',
  },
  {
    title: 'Switch accounts',
    icon: <FontAwesomeIcon icon={faRepeat} />,
  },
  {
    title: 'Log Out',
  },
];

export const NAVBAR_ICON = [
  {
    name: 'home',
    icon: <FontAwesomeIcon icon={faInstagram} />,
    active: <FontAwesomeIcon icon={faInstagramSquare} />,
    to: '/',
  },
  {
    name: 'home',
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
    active: <FontAwesomeIcon icon={paperPlaneDark} />,
    to: '/direct/inbox/',
  },
  {
    name: 'direct',
    icon: <FontAwesomeIcon icon={faSquarePlus} />,
    active: <FontAwesomeIcon icon={squareDark} />,
  },
  {
    name: 'explore',
    icon: <FontAwesomeIcon icon={faCompass} />,
    active: <FontAwesomeIcon icon={compassDark} />,
    to: '/explore/',
  },
  {
    name: 'notication',
    icon: <FontAwesomeIcon icon={faHeart} />,
    active: <FontAwesomeIcon icon={heartDark} />,
  },
];
