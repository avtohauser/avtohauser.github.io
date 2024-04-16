
window.addEventListener('load', function() {
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        preloader.classList.add('fade-out');
        setTimeout(function() {
            preloader.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 550); // время анимации исчезновения
    }, 2600); // время показа прелоадера
});

// Активировать темную тему при загрузке страницы
toggleTheme('dark');

function toggleTheme(theme) {
    const body = document.body;
    if (theme === 'light') {
        body.classList.replace('dark-theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
    }
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function toggleTheme(theme) {
    document.body.className = theme + '-theme';
}

