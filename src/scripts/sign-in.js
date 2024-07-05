// Função assíncrona para comparar a senha inserida com o hash armazenado
async function comparePasswords(inputPassword, storedPasswordHash) {
  // Codifica a senha inserida em um buffer de bytes
  const buffer = new TextEncoder().encode(inputPassword);
  
  // Calcula o hash SHA-256 do buffer
  const hash = await crypto.subtle.digest('SHA-256', buffer);

  // Converte o hash em um array de bytes
  const hashArray = Array.from(new Uint8Array(hash));
  
  // Converte cada byte em uma string hexadecimal, concatenando-os em uma única string
  const inputPasswordHash = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  // Compara o hash da senha inserida com o hash armazenado
  return inputPasswordHash === storedPasswordHash;
}

// Adiciona um listener de evento ao formulário de login
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  // Previne o comportamento padrão do submit do formulário
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  // Verifica se algum campo está vazio
  const hasFieldErrors = !email || !password;
  if (hasFieldErrors) {
    // Exibe um alerta se algum campo estiver vazio
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Obtém os usuários armazenados no localStorage, ou inicializa um array vazio se não houver usuários
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Verifica se o usuário com o e-mail fornecido está registrado
  const user = users.find(user => user.email === email);
  if (!user) {
    // Exibe um alerta se o e-mail não estiver registrado
    alert('E-mail ou senha inválidos.');
    return;
  }

  // Compara a senha inserida com o hash da senha armazenada
  const passwordMatch = await comparePasswords(password, user.password);
  if (!passwordMatch) {
    // Exibe um alerta se as senhas não coincidirem
    alert('E-mail ou senha inválidos.');
    return;
  }

  // Gera um token de autenticação para o usuário autenticado
  const token = generateToken(user.name, email);
  
  // Armazena o token de autenticação no localStorage
  localStorage.setItem('authToken', token);

  // Exibe um alerta informando que a autenticação foi bem-sucedida
  alert('Autenticado com sucesso!');
  
  // Redireciona o usuário para a página principal
  window.location.href = 'index.html';
});

// Função para gerar um token de autenticação
function generateToken(name, email) {
  // Cria um objeto com os dados do usuário e o timestamp atual
  const tokenObject = {
    name,
    email,
    timestamp: Date.now()
  };

  // Converte o objeto para uma string base64 e retorna
  return btoa(JSON.stringify(tokenObject));
}
