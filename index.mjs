//Importar librerias necesarias para el funcionamiento del programa
import express from 'express';
import fs from 'fs';

const db = {
	file: './data.json',
	load(){
		return JSON.parse(fs.readFileSync(this.file)) //Lee el archivo data.json
	},
	save(data){
		fs.writeFileSync(this.file, JSON.stringify(data))  //Escribir datos en el archivo
	}
}
const app = express();

app.use(express.json());



app.post('/create', (req,res) =>{  //Post para guardar usuarios en la DB
    const users= db.load();
    const user = req.body;
    
    user.id = users.length;
    users.push(user);
    db.save(users)

    res.json ({
        msg: `User nuevo:`,user
    })
})


app.get("/users/:id" , (req, res) => {  //Mostrar informacion del usuario segun su id
    const users = db.load(); 
    const id = req.params.id; //Obtener la id a buscar

    const user = users.find(u => u.id == id);
    console.log(user)
    res.json({
        msg:`Usuario encontrado: `, user
    });
})


app.get("/users",(req,res) =>{
    const users = db.load();
    res.json({
        users
    })
})


app.put("/update",(req,res) =>{  //Modificar usuario usando la ID
    const users = db.load()
    const newData = req.body;
    const user = users.find(u => u.id == newData.id)

    if (user){
        user.nombre = newData.nombre ? newData.nombre : user.nombre
        user.apellido = newData.apellido ? newData.apellido : user.apellido
        user.edad = newData.edad ? newData.edad : user.edad

        db.save(users)
        res.json({
            msg: `Usuario modificado: `,user
        })
    }else{
        res.status(404).json({msj: `Usuario no encontrado` })
    }
})

app.listen(3000, () =>{
    console.log(`Server started on port 3000`);
})