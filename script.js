const signupButton = document.getElementById('signUpBtn');

signupButton.addEventListener('click', function() {
  window.location.href = 'HTMLS/signin.html';
});



const joinButton = document.getElementById('joinBtn');

joinButton.addEventListener('click', function() {
  window.location.href = 'HTMLS/join.html';
});


const xButton = document.getElementById('x-btn');

xButton.addEventListener('click', function() {
  window.location.href = '../';
});


$(function() {
    $("#datepicker").datepicker();
  });