import runnerImage from '../assets/endless-runner.png';
import norpgramImage from '../assets/norpgram-min.png';
import norpmoviesImage from '../assets/norp_movies-min.png';
import soundImage from '../assets/sound-min.png';
import bookingsImage from '../assets/booking-appointments.jpg';

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
    title: 'Movies Catalogue',
    desc: 'A movies list display built by leveraging an API',
    image: norpmoviesImage,
    tags: ['React', 'Redux', 'The Movie DB'],
    github: 'https://github.com/RNtaate/movies-catalogue',
    live: 'https://norp-movies.netlify.app',
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
  {
    title: 'Booking Appointments',
    desc: 'A full stack project for booking appointments at a fictional massage parlor.',
    image: bookingsImage,
    tags: ['React', 'Ruby on Rails'],
    github: 'https://github.com/RNtaate/bookings-frontend',
    view: 'DESKTOP',
  },
];

export default projectsData;
