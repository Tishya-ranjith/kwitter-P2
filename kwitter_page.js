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




user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+ message +"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span="<span class='glyphicon glyphicon-thumbs-up'>"+like+"</span> </button>";
row=name_with_tag+message_with_tag+like_button+span;
document.getElementById("output").innerHTML+=row;




      } });  }); }
getData();

function updateLike(message_id)
 { 
   console.log("clicked on like button - " + message_id); 
       button_id = message_id;
        likes = document.getElementById(button_id).value; 
        updated_likes = Number(likes) + 1; 
        console.log(updated_likes);
        firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
 }

 
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";


}
