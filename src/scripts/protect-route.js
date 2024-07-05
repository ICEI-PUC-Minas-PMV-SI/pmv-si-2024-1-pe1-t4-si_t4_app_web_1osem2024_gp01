// Função para obter o usuário a partir do token de autenticação armazenado no localStorage
function getUserFromToken() {
  // Obtém o token de autenticação do localStorage
  const token = localStorage.getItem('authToken');
  
  // Se não houver token, retorna null
  if (!token) return null;

  try {
    // Decodifica o token de base64 para uma string JSON
    const tokenObject = JSON.parse(atob(token));

    // Retorna o e-mail do usuário armazenado no token
    return tokenObject.email;
  } catch (e) {
    // Exibe um erro no console se o token for inválido
    console.error('Invalid token:', e);
    
    // Retorna null se o token for inválido
    return null;
  }
}

// Função para proteger a rota, redirecionando para a página de login se o usuário não estiver autenticado
function protectRoute() {
  // Obtém o usuário a partir do token de autenticação
  const user = getUserFromToken();

  // Se não houver usuário, redireciona para a página de login
  if (!user) {
    window.location.href = 'login.html';
  }
}

// Chama a função para proteger a rota ao carregar a página
protectRoute();
