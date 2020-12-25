import drum from '../images/drum.JPG';
import  weather  from "../images/weather.JPG";
import  loginForm  from "../images/loginForm.JPG";
import  QuizBeee  from "../images/QuizBeee.JPG";
import  ReactRecipe  from "../images/ReactRecipe.JPG";
import  RockPaper  from "../images/Rock-paper.JPG";
import  threeDots  from "../images/threeDots.JPG";
import  ticTac  from "../images/tic-tac.JPG";
import  tindog  from "../images/tindog.JPG";
import  webChat from "../images/webChat.JPG";


export const projectDetails = [
    {
        id: 1,
        name: 'Weather Application',
        description: 'A Nodejs and ExpressJS based weather data fetching application',
        techUsed: ['Node JS', 'Express JS', 'HTML', 'CSS'],
        date: 'November 2020',
        gitHub: 'https://github.com/aman11srivastava/weather-app-new',
        url: 'https://aman-skydropv2-weather-app.herokuapp.com/',
        image: weather
    },
    {
        id: 2,
        name: 'Web Chat Application',
        description: 'A fully functional React-based web chat application with login and signup features.',
        techUsed: ['React JS', 'Google Firebase', 'Material UI', 'Javascript', 'HTML', 'CSS'],
        date: 'July 2020',
        gitHub: 'https://github.com/aman11srivastava/Chat',
        url: 'https://chat-app-38428.firebaseapp.com/',
        image: webChat
    
    },
    {
        id: 3,
        name: 'QuizBee',
        description: 'A quiz app that displays 5 randomly generated questions from a JSON le and displays score card as per the users response',
        techUsed: ['React JS', 'Javascript', 'HTML', 'CSS'],
        date: 'August 2020',
        gitHub: 'https://github.com/aman11srivastava/Quiz-App',
        url: 'https://quiz-app-6ff05.firebaseapp.com/',
        image: QuizBeee
    },
    {
        id: 4,
        name: 'Recipe Web Application',
        description: 'Web application to create, upload and delete Recipes.',
        techUsed: ['React JS', 'Javascript', 'HTML', 'CSS'],
        date: 'May 2020',
        gitHub: 'https://github.com/aman11srivastava/React-Recipe-App',
        url: 'https://recipe-web-app-5bc20.firebaseapp.com/',
        image: ReactRecipe
    },
    {
        id: 5,
        name: 'Rock Paper Scissor Game',
        description: 'A Rock Paper scissors game with CSS Animations',
        techUsed: ['Javascript', 'HTML', 'CSS'],
        date: 'July 2020',
        gitHub: 'https://github.com/aman11srivastava/Rock-Paper-Scissor',
        url: 'https://aman11srivastava.github.io/Rock-Paper-Scissor/',
        image: RockPaper
    
    },
    {
        id: 6,
        name: 'Tailwind CSS Recipe App',
        description: '',
        techUsed: ['Tailwind CSS', 'HTML'],
        date: 'December 2020',
        gitHub: 'https://github.com/aman11srivastava/tailwind-css-recipe-app',
        url: 'https://github.com/aman11srivastava/tailwind-css-recipe-app',
        image: ''
    },
    {
        id: 7,
        name: 'Tic Tac Toe',
        description: 'A Tic Tac Toe game using React JS',
        techUsed: ['React JS', 'Javascript', 'HTML', 'CSS'],
        date: 'August 2020',
        gitHub: 'https://github.com/aman11srivastava/Tic-Tac-Toe',
        url: 'https://learn-firebase-7c14e.firebaseapp.com/',
        image: ticTac
    },
    {
        id: 8,
        name: 'Notes App',
        description: 'It is a simple command line based note taking application built purely with Node JS. In this application, the user can Add, Remove (Delete), List and Read the notes.',
        techUsed: ['Node JS'],
        date: 'November 2020',
        gitHub: 'https://github.com/aman11srivastava/notes-app/',
        url: 'https://github.com/aman11srivastava/notes-app/',
        image: ''
    },
    {
        id: 9,
        name: 'OTP Verification',
        description: 'A simple React web page that sends an OTP for verification with recaptcha using Google Firebase.',
        techUsed: ['React JS', 'Google Firebase', 'Javascript', 'HTML'],
        date: 'June 2020',
        gitHub: 'https://github.com/aman11srivastava/OTP-verification',
        url: 'https://github.com/aman11srivastava/OTP-verification',
        image: ''
    },
    {
        id: 10,
        name: 'Login Form',
        description: 'A simple login form developed using React JS without Database connectivity using Form creation packages like Formik and Yup and React Router.',
        date: 'June 2020',
        techUsed: ['React JS', 'Formik and Yup', 'React Router', 'Javascript', 'HTML', 'CSS'],
        gitHub: 'https://github.com/aman11srivastava/react-login-form',
        url: 'https://practice-499ab.firebaseapp.com/',
        image: loginForm
    },
    {
        id: 11,
        name: 'Todo Application',
        description: 'A simple todo app',
        date: 'June 2020',
        techUsed: ['React JS', 'Javascript', 'HTML'],
        github: 'https://github.com/aman11srivastava/React-ToDo-App',
        url: 'https://github.com/aman11srivastava/React-ToDo-App',
        image: ''
    },
    {
        id: 12,
        name: 'TinDog',
        description: ' Hypothetical dating web app for Dogs.',
        date: 'March 2020',
        techUsed: ['HTML', 'CSS', 'Bootstrap'],
        github: 'https://github.com/aman11srivastava/TinDog',
        url: 'https://aman11srivastava.github.io/TinDog/',
        image: tindog
    },
    {
        id: 13,
        name: 'Drum Kit',
        description: 'A simple web page that plays sounds of various musical instruments on different key presses and mouse clicks.',
        date: 'April 2020',
        techUsed: ['Javascript', 'HTML', 'CSS'],
        github: 'https://github.com/aman11srivastava/Drum-Kit',
        url: 'https://aman11srivastava.github.io/Drum-Kit/',
        image: drum
    },
    {
        id: 14,
        name: 'Random Color Boxes',
        description: 'A simple web page that consists of 32 square boxes, wherein each box changes its colour after a regular time interval.',
        date: 'June 2020',
        techUsed: ['React JS', 'Javascript', 'HTML', 'CSS'],
        github: '',
        url: '',
        image: ''
    },
    {
        id: 15,
        name: 'Three Dots',
        description: 'A simple HTML and CSS based Responsive Website',
        data: 'July 2020',
        techUsed: ['HTML', 'CSS'],
        github: 'https://github.com/aman11srivastava/Laptop-Website',
        url: 'https://aman11srivastava.github.io/Laptop-Website/',
        image: threeDots
    }
]