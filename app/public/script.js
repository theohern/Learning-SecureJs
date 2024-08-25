document.getElementById('createUserForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    console.log("create new user")

    const response = await fetch('http://192.168.1.41:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password})
    });

    const result = await response.json();
    
    console.log(result)
    document.getElementById('results').textContent = JSON.stringify(result, null, 2);
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('http://192.168.1.41:8080/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        console.log('Réponse du serveur:', result);

        if (result.token) {
            localStorage.setItem('token', result.token);
            alert('Connexion réussie!');
        } else {
            alert('Échec de la connexion');
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
        alert('Une erreur s\'est produite');
    }
});

document.getElementById('getUsersButton').addEventListener('click', async function() {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('Vous devez être connecté pour accéder à cette ressource.');
        return;
    }

    try {
        const response = await fetch('http://192.168.1.41:8080/users', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        console.log('Utilisateurs:', result);
        document.getElementById('results').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
        alert('Une erreur s\'est produite');
    }
});

document.getElementById('deleteUserForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const userId = document.getElementById('userId').value;
    const token = localStorage.getItem('token');

    if (!token) {
        alert('Vous devez être connecté pour supprimer un utilisateur.');
        return;
    }

    try {
        const response = await fetch(`http://192.168.1.41:8080/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        document.getElementById('results').textContent = JSON.stringify(result, null, 2);

        if (response.ok) {
            alert('Utilisateur supprimé avec succès.');
        } else {
            alert('Échec de la suppression de l\'utilisateur.');
        }
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
        document.getElementById('results').textContent = 'Une erreur s\'est produite';
    }
});


