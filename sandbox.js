const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(e);
  // console.log(username.value);
  // console.log(form.username.value);
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = 'User name is valid';
  } else {
    feedback.textContent =
      'User name must contain upper or lower letters & must between 6 and 12 characters long';
  }
});

// const pattern = /^[a-zA-Z]{6,}$/;
// let result = pattern.test('JulianQWEQW');
// console.log(result);

// if (result) {
//   console.log('RegEx test passed ');
// } else {
//   console.log('RegEx test failed');
// }

//Live feedback
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    console.log('Passed');
    form.username.setAttribute('class', 'success');
  } else {
    console.log('Failed');
    form.username.setAttribute('class', 'error');
  }
});
