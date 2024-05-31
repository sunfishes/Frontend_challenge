const correctID = 'test';
const correctPassword = '1234';

function login() {
    const id = document.querySelector('input[name="id"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (id === correctID && password === correctPassword) {
        alert('로그인 되었습니다.');
    } else {
        alert('ID 혹은 PW가 잘못되었습니다.');
    }
}

document.querySelector('#login-button button').addEventListener('click', login);