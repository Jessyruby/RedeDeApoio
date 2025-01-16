document.querySelector('form').addEventListener('submit', function(event) {

    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault(); 
    } else {
        alert('Email enviado!');
    }
    
});