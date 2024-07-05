// Função assíncrona para gerar o hash SHA-256 de uma senha
async function hashPassword(str) {
  // Codifica a string em um buffer de bytes
  const buffer = new TextEncoder().encode(str);
  
  // Calcula o hash SHA-256 do buffer
  const hash = await crypto.subtle.digest('SHA-256', buffer);

  // Converte o hash em um array de bytes
  const hashArray = Array.from(new Uint8Array(hash));
  
  // Converte cada byte em uma string hexadecimal, concatenando-os em uma única string
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  // Retorna o hash em formato hexadecimal
  return hashHex;
}

// Adiciona um listener de evento ao formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
  // Previne o comportamento padrão do submit do formulário
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const name = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;

  // Verifica se algum campo está vazio
  const hasFieldErrors = !name || !email || !password;
  if (hasFieldErrors) {
    // Exibe um alerta se algum campo estiver vazio
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Obtém os usuários armazenados no localStorage, ou inicializa um array vazio se não houver usuários
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Verifica se o e-mail já está registrado
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    // Exibe um alerta se o e-mail já estiver registrado
    alert('E-mail já registrado.');
    return;
  }

  // Gera o hash da senha fornecida
  const hashedPassword = await hashPassword(password);

  // Cria um objeto com os dados do novo usuário
  const userObject = {
    name,
    email,
    password: hashedPassword
  };

  // Adiciona o novo usuário ao array de usuários
  users.push(userObject);
  
  // Atualiza o localStorage com o array de usuários atualizado
  localStorage.setItem('users', JSON.stringify(users));

  // Exibe um alerta informando que o registro foi realizado com sucesso
  alert('Registro realizado com sucesso!');
  
  // Reseta o formulário de cadastro
  document.getElementById('cadastroForm').reset();
  
  // Redireciona o usuário para a página de login
  window.location.href = 'login.html';
});
