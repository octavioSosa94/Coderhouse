
import { initializeApp } from '@firebase/app';
import { StrictMode } from 'react';
import App from '../App'
import { ReactDOM } from 'react-dom';

const firebaseConfig = {
  apiKey: "AIzaSyDPjwA60Iuj2zOZns-WoIqti5TyzR077lo",

  authDomain: "codercommerce-sosa.firebaseapp.com",

  projectId: "codercommerce-sosa",

  storageBucket: "codercommerce-sosa.appspot.com",

  messagingSenderId: "250320686963",

  appId: "1:250320686963:web:c1543618fe951b56fc7f06"

};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root")
ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    rootElement
)
