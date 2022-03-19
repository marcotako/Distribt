db.createUser({
    user: "distribtUser",
    pwd: "distribtPassword",
    roles: [{
        role: "readWrite",
        db: "distribt"
    }
    ],
    mechanisms: ["SCRAM-SHA-1"]
});

db.createCollection("Products");
db.Products.insertOne({"Id": 1, "Details": {"Name": "Producto 1", "Description": "La descripción dice qu es el primer producto"}, "Stock": 32, "Price": 10 });
db.Products.insertOne({"Id": 2, "Details": {"Name": "Segundo producto", "Description": "Este es el producto numero 2"}, "Stock": 3, "Price": 120 });
db.Products.insertOne({"Id": 3, "Details": {"Name": "Tercer", "Description": "Terceras Partes nunca fueron buenas"}, "Stock": 10, "Price": 15 });