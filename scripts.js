
//Change nav background color for two seconds then revert to original.
function NavBackgroundColor(){
  document.getElementById('nav').style.backgroundColor= getRandomColor();

//generate random color
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// reset the nav color to white after 2 seconds
  setTimeout(function(){
    document.getElementById('nav').style.backgroundColor='white';
  }, 2000);
  return true;
}

//Footer navigation item click should change the order of the footer nav items
function Shuffle(){
  var div = document.querySelector('#linkContainer'),
      pList = document.querySelectorAll('#linkContainer p');
  var array = [].slice.call(pList).sort(func);

  function func(a, b) {
    return 0.5 - Math.random();
  }

  array.forEach(function (p) {
      div.appendChild(p);
  });
}

//Form submit should open a dialog box with the entered form data
function Submit(){
  var name = document.getElementById('textboxName').value;
  var address = document.getElementById('textboxAddress').value;
  var city = document.getElementById('textboxCity').value;

  message = 'Please confirm your information below.\n' +
  '\n Name: ' + name + '\n' +
  '\n Address: ' + address + '\n' +
  '\n City: ' + city + '\n';

  alert(message);
}
