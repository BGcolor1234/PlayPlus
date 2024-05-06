// Your web app's Firebase configuration
var firebaseConfig = {
    //***ATENCIÓN***//
    apiKey: "AIzaSyAJuSst2O2Gg02FSIhxZXdjWYuM-lJ2-sE",
    authDomain: "play-cebbe.firebaseapp.com",
    databaseURL: "https://play-cebbe-default-rtdb.firebaseio.com",
    projectId: "play-cebbe",
    storageBucket: "play-cebbe.appspot.com",
    messagingSenderId: "1064709982140",
    appId: "1:1064709982140:web:c12939acd868449892cdb9",
    measurementId: "G-JQQGGM713N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
coleccionUsuarios = db.ref().child('user');
coleccionProductos = db.ref().child('Juegos');

coleccionUsuarios.once('value', (snapshot) => {
    const usuarios = snapshot.val();
    console.log(usuarios);
});

$('#btnLogin').click(function () {
    document.getElementById('loginForm').addEventListener('submit', async function (event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de correo electrónico y contraseña del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            // Realizar una consulta a la base de datos para verificar si el usuario existe y la contraseña coincide
            const snapshot = await coleccionUsuarios.once('value');
            const usuarios = snapshot.val();

            // Verificar si el usuario con el correo electrónico proporcionado existe y si la contraseña coincide
            let usuarioEncontrado = false;
            if (usuarios) {
                Object.keys(usuarios).forEach((key) => {
                    const usuario = usuarios[key];
                    if (usuario.email === email && usuario.password === password) {
                        usuarioEncontrado = true;
                        console.log("Usuario encontrado:", usuario.user);
                        console.log("Rol:", usuario.rol);
                        window.location.href = 'https://bgcolor1234.github.io/Playcon-BASE/src/dash.html'
                        
                        // Si el inicio de sesión es exitoso, muestra una alerta
                        Swal.fire({
                            icon: 'success',
                            title: 'Signed in successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        
                    }
                });
            }

            if (!usuarioEncontrado) {
                console.log("Usuario no encontrado o contraseña incorrecta.");
                             // Si el inicio de sesión es exitoso, muestra una alerta
                             Swal.fire({
                                icon: 'error',
                                title: 'Usuario no encontrado o contraseña incorrecta.',
                                showConfirmButton: false,
                                timer: 1500
                            });
            }
        } catch (error) {
            console.error("Error al consultar la base de datos:", error);
            // Aquí puedes manejar el error como desees, por ejemplo, mostrando un mensaje al usuario
        }
    });
});

