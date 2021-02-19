var firebaseConfig = {
    apiKey: "AIzaSyA3d7Zcrq3w3aL6_a3BHwOwLZK5O6s746g",
    authDomain: "kwtr-f438a.firebaseapp.com",
    databaseURL: "https://kwtr-f438a-default-rtdb.firebaseio.com",
    projectId: "kwtr-f438a",
    storageBucket: "kwtr-f438a.appspot.com",
    messagingSenderId: "70837792400",
    appId: "1:70837792400:web:f4f6f414159cba75127215"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name= localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){

    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose:"adding_room_name"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}

function getData() 
{
     firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
        console.log("Room Name - " + Room_names); 
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row; }); 
        });
     } getData();

     function redirectToRoomName(name) 
     {
console.log (name);
localStorage.setItem ("room_name",name);
window.location="kwitter_page.html";


     }

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";


}
