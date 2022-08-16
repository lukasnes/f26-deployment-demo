// let castle = document.querySelector('#castle')
let castle = document.getElementById('castle')

const sayWelcome = evt => {
    alert("Welcome to my castle!")
}

castle.addEventListener('click', sayWelcome)