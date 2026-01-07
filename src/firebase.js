import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyCeev18SxIV2yLp_Ep_pLRlas9104b_13k",
  authDomain: "bible-reading-chatbot.firebaseapp.com",
  databaseURL: "https://bible-reading-chatbot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bible-reading-chatbot",
  storageBucket: "bible-reading-chatbot.firebasestorage.app",
  messagingSenderId: "477440527272",
  appId: "1:477440527272:web:c19a40dd12e059dc09eb9d",
  measurementId: "G-6V79RYH313"
};

// Firebase 초기화
let app;
let database;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
} catch (error) {
  console.warn('Firebase 설정이 필요합니다. firebase.js 파일을 확인하세요.');
}

export { database };
