var firebaseConfig = {
    apiKey: "AIzaSyB05nlsjECAyRLmJCAc4Un9br1sUUfqNmE",
    authDomain: "kwitter-a6500.firebaseapp.com",
    databaseURL: "https://kwitter-a6500-default-rtdb.firebaseio.com",
    projectId: "kwitter-a6500",
    storageBucket: "kwitter-a6500.appspot.com",
    messagingSenderId: "980540485332",
    appId: "1:980540485332:web:c5335c47e83882d2575541"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
          window.location = "kwitter.html";
}