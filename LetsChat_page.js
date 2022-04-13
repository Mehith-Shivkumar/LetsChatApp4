// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFgyiMIgrZQiOikSABY5xFeSr6eJx3lPs",
    authDomain: "letschat-app-4cf0b.firebaseapp.com",
    databaseURL: "https://letschat-app-4cf0b-default-rtdb.firebaseio.com",
    projectId: "letschat-app-4cf0b",
    storageBucket: "letschat-app-4cf0b.appspot.com",
    messagingSenderId: "559987712549",
    appId: "1:559987712549:web:efebbe4c308e4347e9d5cc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
    
//End code
 } });  }); }
getData(
 
);

function logout()
{
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location="index.html";
}

function leave()
{
           window.location="LetsChat_room.html";
}
