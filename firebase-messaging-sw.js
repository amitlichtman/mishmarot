/* DoTheShift: קובץ הרקע של ההתראות. הדפדפן מריץ אותו גם כשהאפליקציה סגורה,
   ומציג את ההתראות שהשרת שולח. לחיצה על התראה פותחת את האפליקציה */
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
firebase.messaging();   // התראות עם כותרת וטקסט מוצגות אוטומטית

/* לחיצה על התראה שהאפליקציה עצמה הציגה (כשהיא הייתה פתוחה): חוזרים לאפליקציה */
self.addEventListener('notificationclick', e => {
  if (!e.notification.data?.local) return;          // התראות מהשרת מטופלות על ידי Firebase
  e.notification.close();
  e.waitUntil(clients.matchAll({ type:'window', includeUncontrolled:true }).then(list => {
    const open = list.find(c => c.url.includes('app.html'));
    return open ? open.focus() : clients.openWindow('app.html');
  }));
});
