// let castle = document.querySelector('#castle')
let castle = document.getElementById('castle')

const sayWelcome = evt => {
    axios.get('/rollbar')
        .then(response => {
            alert(response.data)
        })
}

castle.addEventListener('click', sayWelcome)