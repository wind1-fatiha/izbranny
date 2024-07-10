const login=document.getElementById('loginform')
const nameinp=document.getElementById('nameinp')
const passwordinp=document.getElementById('passwordinp')

function check(event) {
    event.preventDefault()

    if (passwordinp.value==='1234' && nameinp.value==='admin') {
        localStorage.setItem('login',JSON.stringify(true))
        window.location.pathname='/index.html'
    }
    else{
        alert('Не верно введены данные')
    }
}

login.addEventListener('submit',check)