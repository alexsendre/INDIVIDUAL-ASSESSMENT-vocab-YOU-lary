import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h2 style="margin-top:25px;">Welcome!</h2><br><h4 class="mt-3">Sign in below</h4><button id="google-auth" class="btn btn-outline-light mt-3" style="text-align:center;">LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
