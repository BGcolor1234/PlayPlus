
// Your web app's Firebase configuration
var firebaseConfig = {
    //***ATENCIÓN***//
    //AQUÍ VA EL SDK QUE TE GENERE TÚ FIREBASE//
  
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
coleccionProductos = db.ref().child('Juegos');
 // Obtén los datos de los productos
// Función para obtener y mostrar los productos
function mostrarProductos(containerId) {
    const container = document.getElementById(containerId);
    
    coleccionProductos.on('value', function(snapshot) {
      // Limpiar el contenedor de productos antes de agregar los nuevos productos
      container.innerHTML = '';
      
      snapshot.forEach(function(childSnapshot) {
        // Obtener los datos de cada producto
        var Juego = childSnapshot.val();
        
        // Crear un elemento HTML para mostrar el producto
        var productoHTML = `
        <div class="flex justify-center mb-8">
          <div
            class="group relative block overflow-hidden h-80 w-72 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="${Juego.IMG}"
              alt="DOOM"
              class="h-48 w-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
            />
            <div class="p-4">
              <span
                class="whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium rounded-full"
                >Nuevo</span
              >
              <h3 class="mt-2 text-lg font-medium text-gray-900">${Juego.Nombre}</h3>
              <p class="mt-1 text-sm text-gray-700">${Juego.PRECIO}</p>
            </div>
          </div>
        </div>
        `;
        
        // Agregar el elemento HTML del producto al contenedor de productos
        container.innerHTML += productoHTML;
      });
    });
  }
  
  // Llamar a la función para mostrar los productos cuando se carga la página
  window.onload = function() {
    mostrarProductos('productos-container-ps4');
    mostrarProductos('productos-container-xbox');
    mostrarProductos('productos-container-nintendo');
  };
  
