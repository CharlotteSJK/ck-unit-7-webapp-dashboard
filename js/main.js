const notification = document.getElementsByClassName('bell-icon'); 
const dropdown = document.getElementsByClassName('dropdown-content'); 
const alertBanner = document.getElementById('alert');  
const user = document.getElementById('tags');
const message = document.getElementById('message-field');
const send = document.getElementById('send');

// Notification section

function showDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.bell-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Alert Banner section

alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.style.backgroundColor = '#7477BF';
alertBanner.style.borderRadius = '5px';
alertBanner.style.padding = '8px';
alertBanner.style.margin = '15px 20px 5px 20px';
alertBanner.style.color = '#fff';

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"; 
    }
});



// Messaging section

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });

// Autocomplete function

$( function() {
  var tags = [
    "Victoria Chambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver",
  ];

  $( "#tags" ).autocomplete({
    source: tags
  });
} );




