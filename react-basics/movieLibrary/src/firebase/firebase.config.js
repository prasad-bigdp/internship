// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB6YgbHPa33-lNR08GeWEssFzaFEUjNd0I",
	authDomain: "fir-57b17.firebaseapp.com",
	projectId: "fir-57b17",
	storageBucket: "fir-57b17.firebasestorage.app",
	messagingSenderId: "782371834283",
	appId: "1:782371834283:web:a3234cbe8d2d3af8052aee",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export {app,firebaseConfig}