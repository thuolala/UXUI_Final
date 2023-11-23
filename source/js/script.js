function hideLogo(){
    var x = document.getElementById("logo-hidden");
    if (x.style.display === "none") {
      x.style.display = "inline-block";
    } else {
      x.style.display = "none";
    }
}

function login(){
    $(document).ready(function(){
        $("#login").click(function(){
          $("#myLogin").modal();
        });
      });
}

function register(){
  // Get the button
  var btn = document.getElementById("register-link");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    $('#myLogin').modal('hide');
    $('#myRegister').modal('show');
  }
}

function backLogin(){
  // Get the button
  var btn = document.getElementById("login-link");

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    $('#myRegister').modal('hide');
    $('#myLogin').modal('show');
  }
}

// function chat(){
//   // // Get the button
//   // var btn = document.getElementById("btn-chat");

//   // // When the user clicks the button, open the modal 
//   // btn.onclick = function() {

//   //   $('#myChat').modal('show');
//   // }
//   // alert(btn);

//   $( "#btn-chat" ).load( "chat.html", function() {
//     alert( "Load was performed." );
//   });
// }

