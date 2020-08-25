const notification = document.getElementsByClassName('bell-icon'); 
const dropdown = document.getElementsByClassName('dropdown-content'); 
const alertBanner = document.getElementById('alert');  
const user = document.getElementById('tags');
const message = document.getElementById('message-field');
const send = document.getElementById('send');
const switch1 = document.getElementById('email');
const switch2 = document.getElementById('profile');
const timezone = document.getElementById('timezone');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');

// Notification section

function showDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.bell-icon')) {
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

$(function() {
  var tags = [
    "Victoria Chambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver",
  ];

  $( "#tags" ).autocomplete({
    source: tags
  });
});

//Local storage

const loadSettings = () => {
  const checkedEmail = localStorage.getItem('checkedEmail');
  if (checkedEmail !== true) {
    switch1.checked = (checkedEmail === 'true');
  } else {
    switch1.checked = (checkedEmail === 'false');
  }
  const checkedProfile = localStorage.getItem('checkedProfile');
  if (checkedProfile !== true) {
    switch2.checked = (checkedProfile === 'true');
  } else {
    switch2.checked = (checkedProfile === 'false');
  }
  timezone.selectedIndex = localStorage.getItem('savedTimezone');
}

function testStorage() {
   const test = 'test';
     try {
       localStorage.setItem(test, test);
       localStorage.removeItem(test);
       return true;
     } catch(e) {
       return false;
      }
    }

  if(testStorage() === true) {
  save.addEventListener("click", () => {
    if (timezone.selectedIndex === 0) {
      alert("Select a Timezone");
  } else {
      localStorage.setItem('checkedEmail', switch1.checked);
      localStorage.setItem('checkedProfile', switch2.checked);
      localStorage.setItem('savedTimezone', timezone.selectedIndex);
      alert("Your settings have been saved"); 
    }
  });

  cancel.addEventListener("click", () => {
    localStorage.setItem('checkedEmail', switch1.checked = false)
    localStorage.setItem('checkedProfile', switch2.checked = false)
    localStorage.setItem('savedTimezone', timezone.selectedIndex = 0);
    alert("Your preferred settings have been cancelled"); 
  });

  loadSettings();
}

