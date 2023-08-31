document.addEventListener('DOMContentLoaded', function () {
    const getUsersBtn = document.getElementById('getUsersBtn');
    const userGrid = document.getElementById('userGrid');
    const loader = document.getElementById('loader');

    getUsersBtn.addEventListener('click', async function () {
        loader.style.display = 'block';

        try {
            const response = await fetch('https://reqres.in/api/users?page=1');
            const data = await response.json();
            const users = data.data;

            userGrid.innerHTML = '';
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('card');
                userCard.innerHTML = `<img src="${user.avatar}" alt="${user.first_name}">
                                <h3>${user.first_name} ${user.last_name}</h3>
                                <p>Email: ${user.email}</p>`;
                userGrid.appendChild(userCard);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            loader.style.display = 'none';
        }
    });
});
