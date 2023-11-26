import { showAlert } from './alert.js';

export const signup = async (name, email,role, phoneNo, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://group4himalayanhues.onrender.com/api/v1/users/signup',
      data: {
        name,
        email,
        role,
        phoneNo,
        password,
        passwordConfirm,
        
       },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Account created successfully');
      window.setTimeout(() => {
        location.assign('/login');
      }, 1500);
    }
  } catch (err) {
    let message =
      typeof err.response !== 'undefined'
        ? err.response.data.message
        : err.message;
    showAlert('error', 'Error: Passwords are not the same!', message);
  }
};

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('confirm-password').value;
  const phoneNo = document.getElementById('phone').value; // Get phoneNo input value
  const role = document.querySelector('input[name="role"]:checked').value;
  signup(name, email,role,phoneNo, password, passwordConfirm);

});
