function getUserFromToken() {
  const token = localStorage.getItem('authToken');
  if (!token) return null;

  try {
    const tokenObject = JSON.parse(atob(token));

    return tokenObject.email;
  } catch (e) {
    console.error('Invalid token:', e);
    return null;
  }
}

function protectRoute() {
  const user = getUserFromToken();

  if (!user) {
    window.location.href = 'login.html';
  }
}

protectRoute();
