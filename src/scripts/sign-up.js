async function hashPassword(str) {
  const buffer = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buffer);

  const hashArray = Array.from(new Uint8Array(hash));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  return hashHex;
}

document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  const hasFieldErrors = !name || !email || !password;
  if (hasFieldErrors) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert('E-mail já registrado.');
    return;
  }

  const hashedPassword = await hashPassword(password);

  const userObject = {
    name,
    email,
    password: hashedPassword
  };

  users.push(userObject);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registro realizado com sucesso!');
  document.getElementById('cadastroForm').reset();
  window.location.href = 'sign-in.html';
});7
