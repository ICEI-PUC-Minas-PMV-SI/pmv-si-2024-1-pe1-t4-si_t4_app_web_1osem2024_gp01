document.addEventListener("DOMContentLoaded", function() {
  const authToken = localStorage.getItem('authToken');
  const navbar = document.querySelector('.navbar-nav');
  const loginItem = document.getElementById('login-item');
  const registerItem = document.getElementById('register-item');

  if (authToken) {
      const tokenContent = JSON.parse(atob(authToken));
      const userName = tokenContent.name;

      if (loginItem) loginItem.remove();
      if (registerItem) registerItem.remove();

      const userItem = document.createElement('li');
      userItem.className = 'nav-item';
      userItem.innerHTML = `<span class="nav-link">${userName}</span>`;
      navbar.appendChild(userItem);

      const logoutItem = document.createElement('li');
      logoutItem.className = 'nav-item';
      logoutItem.innerHTML = `<button class="btn btn-link nav-link" id="logout-button">Logout</button>`;
      navbar.appendChild(logoutItem);

      document.getElementById('logout-button').addEventListener('click', function() {
          localStorage.removeItem('authToken');
          window.location.reload();
      });
  }
});
