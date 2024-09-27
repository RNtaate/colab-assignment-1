import runnerImage from '../assets/endless-runner.png';
import norpgramImage from '../assets/norpgram-min.png';
import norpmoviesImage from '../assets/norp_movies-min.png';
import soundImage from '../assets/sound-min.png';
import bookingsImage from '../assets/booking-appointments.jpg';
import CarouselImage from '../assets/Carousel_Colab_Crop.jpg';
import moviesV2Image from '../assets/moviesV2.png';
import ticImage from '../assets/tic-icon.svg';
import chatApp from '../assets/norp_chat_app.png';
import shooting from '../assets/shooting-game.png';

const projectsData = [
  {
    title: 'Endless Runner',
    desc: 'A platform game built using Phaser 3 Library.',
    image: runnerImage,
    tags: ['JavaScript', 'Phaser 3', 'Webpack'],
    github: 'https://github.com/RNtaate/Endless-Runner',
    live: 'https://run-buddy-run.netlify.app/',
    view: 'DESKTOP',
  },
  {
    title: 'Image Uploader',
    desc: 'An image posting application built using firebase.',
    image: norpgramImage,
    tags: ['React', 'Firebase'],
    github: 'https://github.com/RNtaate/norpgram',
    live: 'https://norp-gram.netlify.app',
    view: 'DESKTOP',
  },
  {
    title: 'Movies Catalogue V2',
    desc: 'A movies list built to showcase React Query and Tailwind CSS',
    image: moviesV2Image,
    tags: ['React', 'React Query', 'Tailwind CSS'],
    github: 'https://github.com/RNtaate/movies-catalogue-v2-with-react-query',
    live: 'https://norp-movies.netlify.app',
    view: 'DESKTOP',
  },
  {
    title: 'Booking Appointments',
    desc: 'A full stack project for booking appointments at a fictional massage parlor.',
    image: bookingsImage,
    tags: ['React', 'Ruby on Rails'],
    github: 'https://github.com/RNtaate/bookings-frontend',
    view: 'DESKTOP',
  },
  {
    title: 'Animated Carousels',
    desc: 'A collection of animated carousels built with the React-Native Animated API.',
    image: CarouselImage,
    tags: ['React Native', 'Expo'],
    github: 'https://github.com/RNtaate/animated-carousel-React-Native-',
    live: 'https://snack.expo.dev/@rntaate/animated-carousels',
    view: 'MOBILE APP',
  },
  {
    title: 'Norp Chat App',
    desc: 'A real-time chat application built to exercise websockets knowledge.',
    image: chatApp,
    tags: ['React', 'SocketIO', 'React Bootstrap'],
    github: 'https://github.com/RNtaate/norp-chat-app',
    view: 'MOBILE VIEW',
  },
  {
    title: 'Tic Tac Toe',
    desc: 'A simple and fun game of Tic Tac Toe.',
    image: ticImage,
    tags: ['React', 'Vite'],
    github: 'https://github.com/RNtaate/Tic-Tac-Toe-React',
    live: 'https://norp-tictactoe.netlify.app',
    view: 'DESKTOP',
  },
  {
    title: 'Shooter mini game',
    desc: 'A mini shooting game project part of a series of canvas projects.',
    image: shooting,
    tags: ['VanillaJS', 'Webpack', 'HTML5Canvas'],
    github: 'https://github.com/RNtaate/Canvas-Projects',
    live: 'https://shooting-mini-game.netlify.app',
    view: 'DESKTOP, MOBILE(Non-Responsive)',
  },
  {
    title: 'Movies Catalogue',
    desc: 'A movies list display built by leveraging an API',
    image: norpmoviesImage,
    tags: ['React', 'Redux', 'The Movie DB'],
    github: 'https://github.com/RNtaate/movies-catalogue',
    live: 'https://the-norp-movies.netlify.app',
    view: 'DESKTOP',
  },
  {
    title: 'Landing Page',
    desc: 'A fictional webpage of an online Sounds Electronics Store.',
    image: soundImage,
    tags: ['HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/RNtaate/Sound-Electronics-store',
    live: 'https://rawcdn.githack.com/RNtaate/Sound-Electronics-store/ccadeae6e3e1eda77681a48f5f835e974dddcbd5/index.html',
    view: 'RESPONSIVE',
  },
];

export default projectsData;
