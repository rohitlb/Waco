import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import tachyons from 'tachyons'
import * as serviceWorker from './serviceWorker';
import GoogleFontLoader from 'react-google-font-loader';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GoogleFontLoader
      fonts={[
        {
          font: 'Mada',
        },
        {
          font: 'Allerta',
        },
        {
          font: 'Balthazar',
        },
        {
          font: 'Amita',
        },
        {
          font:"Montserrat"
        },
        {
          font:"Open Sans"
        },
        {
          font: 'Bilbo',
        },
        {
          font: 'Bad Script',
        },
        {
          font: 'Overlock',
        },
        {
          font: 'Roboto',
          weights: [400, 700],
        },
      ]}
      subsets={['cyrillic-ext', 'greek']}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
