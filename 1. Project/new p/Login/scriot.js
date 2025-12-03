// basic UI behaviour only (no backend)
const form = document.getElementById('loginForm');
const email = document.getElementById('emailInput');
const pwd = document.getElementById('passwordInput');
const msg = document.getElementById('msg');
const toggle = document.getElementById('togglePwd');

toggle.addEventListener('click', () => {
  if (pwd.type === 'password'){
    pwd.type = 'text';
    toggle.textContent = 'Hide';
  } else {
    pwd.type = 'password';
    toggle.textContent = 'Show';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // simple client-side validation
  if (!email.value || !pwd.value){
    msg.textContent = 'Please provide both Gmail and password.';
    msg.style.color = 'crimson';
    return;
  }

  // simulate login success
  msg.style.color = 'green';
//   msg.textContent = Logged in as {email.value} — (demo) showing avatar.;

  // you can expand here to show the user's photo automatically from a stored mapping
});

// verify Gmail and Password
function verify(Account){
        console.log(Account)
    const Gmail = document.getElementById('emailInput').value;
    const Pass = document.getElementById('passwordInput').value;

    for(let i = 0; i< Account.length; i++){
        if(Gmail == Account[i].email && Pass == Account[i].password ){
            alert("Login Successfully!..");
                // document.forms["myForm"].action ="/${Account} Login/Admin.html";
            
            return true;
        }
        if(i == Account.length -1){
          if (email.value && pwd.value){
            msg.textContent = '';
            alert("Enter valid Gmail and Password!");
            return false ;
          }
        }
        console.log(Account.email[0])
        console.log(Account.password)
    }
}
 

