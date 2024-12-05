document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Handle Sign-Up
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const phone = document.getElementById('signupPhone').value;

        if (localStorage.getItem(email)) {
            message.textContent = 'User already exists. Please log in.';
            message.style.color = 'red';
        } else {
            const user = {
                password: password,
                phone: phone
            };
            localStorage.setItem(email, JSON.stringify(user));
            message.textContent = 'Sign-up successful! Please log in.';
            message.style.color = 'green';
            signupForm.reset();
        }
    });

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = localStorage.getItem(email);

        if (!user) {
            message.textContent = 'User not found. Please sign up.';
            message.style.color = 'red';
        } else {
            const userData = JSON.parse(user);
            if (userData.password === password) {
                message.textContent = `Login successful! Welcome back.`;
                message.style.color = 'green';
            } else {
                message.textContent = 'Incorrect password. Please try again.';
                message.style.color = 'red';
            }
        }
        loginForm.reset();
    });
});
