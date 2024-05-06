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
bodyProductos = $('#bodyProductos').val();



//console.log(bodyProductos);  
$('form').submit(function(e){
  e.preventDefault();
  let id = $('#id').val();
  let codigo = $('#codigo').val();
  let descripcion = $('#descripcion').val();
  let cantidad = $('#cantidad').val();
  let idFirebase = id;
  if(idFirebase == ''){
   idFirebase = coleccionProductos.push().key;
  };
  data = {codigo:codigo, descripcion: descripcion, cantidad: cantidad};
  actualizacionData = {};
  actualizacionData[`/${idFirebase}`] = data;
  coleccionProductos.update(actualizacionData);
  id = '';
  $('form').trigger('reset');
  $('#modalAltaEdicion').modal('hide');
});

const iconoEditar = '<svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';
const iconoBorrar = '<svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>';
function mostrarProductos({ CODIGO, Nombre, PRECIO, IMG }) {
  return `    
  <tr>
        <td
        class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        ${CODIGO}</td>

        <td
        class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
        ${Nombre}</td>


        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">${PRECIO}</div>
        </td>
        
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                    
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium leading-5 text-gray-900"> 
                    <img class="w-10 h-10 rounded-full" src="${IMG}" alt="">
                    </div>
                   
                </div>
            </div>
        </td>
        
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="flex items-center">
              

  
                 

              <button  class="btnBorrar btn btn-danger focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" data-toggle="tooltip" title="Borrar">${iconoBorrar}</button>
              <button  class="btnEditar btn btn-danger focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" data-toggle="tooltip" title="Borrar" onclick="abrirModal()">${iconoEditar}</button>



                  

              </div>
          </td>
    </tr>`;
};





function abrirModal() {
  const modal = document.getElementById("modalInsertarProducto");
  modal.classList.remove("hidden");
}

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("modalInsertarProducto");
  modal.classList.add("hidden");
}

// Función para guardar el producto en la base de datos
function guardarProducto() {
  const codigo = document.getElementById("CODIGO").value;
  const nombre = document.getElementById("Nombre").value;
  const precio = document.getElementById("PRECIO").value;
  const img = document.getElementById("IMG").value;

  // Insertar el nuevo producto en la base de datos
  coleccionProductos.push({
      CODIGO: codigo,
      Nombre: nombre,
      PRECIO: precio,
      IMG: img
  });

  // Cerrar el modal después de guardar
  // Limpiar los campos del modal después de guardar
  $('#id').val('');
    $('#CODIGO').val('');
    $('#Nombre').val('');
    $('#PRECIO').val('');
    $('#IMG').val('');

  cerrarModal();


}

//guardar2

function guardarProducto2() {
  const id = $('#id').val();
  const codigo = $('#CODIGO').val();
  const nombre = $('#Nombre').val();
  const precio = $('#PRECIO').val();
  const img = $('#IMG').val();

  if (id) {
    console.log("editar")
    // Si hay un ID, significa que estamos editando un producto existente
    data = {CODIGO:codigo, Nombre:nombre, PRECIO: precio, IMG:img};
    actualizacionData = {};
    actualizacionData[`/${id}`] = data;

    coleccionProductos.update(actualizacionData);

    $('#id').val('');
    $('#CODIGO').val('');
    $('#Nombre').val('');
    $('#PRECIO').val('');
    $('#IMG').val('');

    cerrarModal();
   
  } else {
    // Si no hay ID, significa que estamos agregando un nuevo producto
    guardarProducto();

  }

  // Cerrar el modal después de guardar o editar
  

  
}



//ELIMINAR//
$('#bodyProductos').on('click', '.btnBorrar', function(){
  Swal.fire({
    title: '¿Está seguro de eliminar el producto?',
    text: "¡Está operación no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Borrar'
    }).then((result) => {
    if (result.value) {
        let id = $(this).closest('tr').attr('id'); //capturamos el atributo ID de la fila  

        db.ref(`Juegos/${id}`).remove(); //eliminamos el producto de firebase      
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.','success')
    }
    })        
});

//modal modificar
//MODIFICAR
$('#tablaProductos').on('click', '.btnEditar', function () {
  
  let id = $(this).closest('tr').attr('id');
  let codigo = $(this).closest('tr').find('td:eq(0)').text().trim();
  let nombre = $(this).closest('tr').find('td:eq(1)').text().trim();
  let precio = $(this).closest('tr').find('td:eq(2)').text().trim();
  let img = $(this).closest('tr').find('td:eq(3)').text().trim();

  $('#id').val(id);
  $('#CODIGO').val(codigo);
  $('#Nombre').val(nombre);                
  $('#PRECIO').val(precio);  
  $('#IMG').val(img);               

});

 
//CHILD_ADDED
coleccionProductos.on('child_added', data =>{
  let tr = document.createElement('tr')
  tr.id = data.key
  tr.innerHTML = mostrarProductos(data.val())
  document.getElementById('bodyProductos').appendChild(tr)
});
//CHILD_CHANGED
coleccionProductos.on('child_changed', data =>{
  let nodoEditado = document.getElementById(data.key)
  nodoEditado.innerHTML = mostrarProductos(data.val())
});
//CHILD_REMOVED
coleccionProductos.on('child_removed', data =>{
  let nodoEditado = document.getElementById(data.key)
  document.getElementById('bodyProductos').removeChild(nodoEditado)
});
//Programación de los botones
$('#btnNuevo').click(function(){
  $('#id').val('');
  $('#codigo').val('');
  $('#descripcion').val('');
  $('#cantidad').val('');
  $('form').trigger('reset');
  $('#modalAltaEdicion').modal('show');
});

$('#tablaProductos').on('click', '.btnEditar', function(){
  let id = $(this).closest('tr').attr('id');
  let codigo = $(this).closest('tr').find('td:eq(0)').text().trim();
  let nombre = $(this).closest('tr').find('td:eq(1)').text().trim();
  let precio = $(this).closest('tr').find('td:eq(2)').text().trim();
  let img = $(this).closest('tr').find('td:eq(3)').text().trim();
  $('#id').val(id);
  $('#CODIGO').val(codigo);
  $('#Nombre').val(nombre);                
  $('#PRECIO').val(precio);  
  $('#IMG').val(img);   
  

});

















