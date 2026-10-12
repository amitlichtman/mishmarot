// Service worker להתראות פוש. חייב לשבת באותה תיקייה כמו index.html
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCoNfZ33l3LxFApgRq0sTQt3gU-YDMlYRM",
  authDomain: "mishmarot-83976.firebaseapp.com",
  projectId: "mishmarot-83976",
  storageBucket: "mishmarot-83976.firebasestorage.app",
  messagingSenderId: "802595753105",
  appId: "1:802595753105:web:87a979f151f647cb6f0330"
});

// ההתראה מוצגת אוטומטית כשהאפליקציה סגורה, ולחיצה עליה פותחת את המערכת
firebase.messaging();
