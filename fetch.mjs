import axios from 'axios';

//Agregar usuarios a la base de datos

axios.post('http://localhost:3000/create',{ 

    nombre:'Geronimo',      //Ingresar nombre del usuario

    apellido:'Corpus', //Ingresar apellido

    edad:0  //Ingresar edad

}).then((respuesta) => {
    console.log('respuesta: ',  respuesta.data);
    
}).catch((error) => {
    console.error(error);
});


//Mostrar todos los usuarios

axios.get('http://localhost:3000/users').then((res) =>{
    console.log('Respuesta: ', res.data);
}).catch((error)=>{
    console.error(error);
})


//Mostrar usuario por su ID

axios.get('http://localhost:3000/users/ID' //Reemplazar 'ID' por la ID del usuario a buscar 
).then((respuesta) =>{

    console.log('respuesta: ', respuesta.data);  //Muestra el usuario en la terminal

}).catch((error) =>{
    console.error(error);
})



//Modificacion de un usuario

axios.put('http://localhost:3000/update',{

    id:3,   //Ingresar id del usuario a modificar

    nombre:'Marco',      //Ingresar el nuevo nombre del usuario (eliminar esta linea si no se desea modificar)

    apellido:'Masa', //Ingresar el nuevo apellido del usuario (eliminar esta linea si no se desea modificar)

    edad:18                 //Ingresar la nueva edad del usuario (eliminar esta linea si no se desea modificar)

}).then((respuesta) =>{
    console.log('respuesta: ', respuesta.data);
}).catch((error) =>{
    console.error(error);
})