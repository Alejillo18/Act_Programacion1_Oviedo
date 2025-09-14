const client = require("./db");

async function getUsers() {
  try {
    const res = await client.query("SELECT * FROM Clientes");
    console.table(res.rows);
  } catch (err) {
    console.error(err);
  }
}

getUsers();


async function getUsersRightJoin(){
    
    try{
        
        const resultados = await client.query(
            "SELECT clientes.nombre, pedidos.producto  FROM clientes RIGHT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;")
            console.log("Right Join")
        console.table(resultados.rows)
    }
    catch(err){
        console.error(err)
    }
}
getUsersRightJoin()


async function getUsersLeftJoin(){
    
    try{
        
        const resultados = await client.query(
            "SELECT clientes.nombre, pedidos.producto  FROM clientes LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;")
            console.log("Left Join")
        console.table(resultados.rows)
    }
    catch(err){
        console.error(err)
    }
}
getUsersLeftJoin()


async function getUsersCrossJoin(){
    
    try{
        
        const resultados = await client.query(
            "SELECT clientes.nombre, pedidos.producto FROM clientes CROSS JOIN pedidos;")
            console.log("Cross Join")
        console.table(resultados.rows)
    }
    catch(err){
        console.error(err)
    }
}
getUsersCrossJoin()
