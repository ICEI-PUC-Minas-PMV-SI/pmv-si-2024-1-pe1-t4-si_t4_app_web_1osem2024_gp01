// Adiciona um listener para o evento 'DOMContentLoaded' que será executado quando o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function() {
  // Obtém o token de autenticação do localStorage
  const authToken = localStorage.getItem('authToken');
  // Seleciona o elemento da barra de navegação
  const navbar = document.querySelector('.navbar-nav');
  // Seleciona os itens de login e registro na barra de navegação
  const loginItem = document.getElementById('login-item');
  const registerItem = document.getElementById('register-item');

  // Se o token de autenticação estiver presente
  if (authToken) {
      // Decodifica o token de base64 para uma string JSON e extrai o conteúdo do token
      const tokenContent = JSON.parse(atob(authToken));
      // Obtém o nome do usuário a partir do conteúdo do token
      const userName = tokenContent.name;

      // Remove os itens de login e registro da barra de navegação, se eles existirem
      if (loginItem) loginItem.remove();
      if (registerItem) registerItem.remove();

      // Cria um novo item de navegação para exibir o nome do usuário
      const userItem = document.createElement('li');
      userItem.className = 'nav-item';
      userItem.innerHTML = `<span class="nav-link">${userName}</span>`;
      // Adiciona o item de navegação do usuário à barra de navegação
      navbar.appendChild(userItem);

      // Cria um novo item de navegação para o botão de logout
      const logoutItem = document.createElement('li');
      logoutItem.className = 'nav-item';
      logoutItem.innerHTML = `<button class="btn btn-link nav-link" id="logout-button">Logout</button>`;
      // Adiciona o item de navegação do botão de logout à barra de navegação
      navbar.appendChild(logoutItem);

      // Adiciona um listener para o evento 'click' no botão de logout
      document.getElementById('logout-button').addEventListener('click', function() {
          // Remove o token de autenticação do localStorage
          localStorage.removeItem('authToken');
          // Recarrega a página
          window.location.reload();
      });
  }
});
