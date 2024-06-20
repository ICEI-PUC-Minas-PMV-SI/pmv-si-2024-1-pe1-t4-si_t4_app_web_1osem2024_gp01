async function comparePasswords(inputPassword, storedPasswordHash) {
  const buffer = new TextEncoder().encode(inputPassword);
  const hash = await crypto.subtle.digest('SHA-256', buffer);

  const hashArray = Array.from(new Uint8Array(hash));
  const inputPasswordHash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  return inputPasswordHash === storedPasswordHash;
}

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  const hasFieldErrors = !email || !password;
  if (hasFieldErrors) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.email === email);
  if (!user) {
    alert('E-mail ou senha inválidos.');
    return;
  }

  const passwordMatch = await comparePasswords(password, user.password);
  if (!passwordMatch) {
    alert('E-mail ou senha inválidos.');
    return;
  }

  const token = generateToken(user.name, email);
  localStorage.setItem('authToken', token);

  alert('Autenticado com sucesso!');
  window.location.href = 'index.html';
});

function generateToken(name, email) {
  const tokenObject = {
    name,
    email,
    timestamp: Date.now()
  };

  return btoa(JSON.stringify(tokenObject));
}
