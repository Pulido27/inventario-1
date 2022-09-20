class Inventario{

    constructor(){
        this.inventario = [];
    }

    agregar(producto){
        this.inventario.push(producto);
    }

    eliminar(codigo){
        let i = 0;
        let flag = 0;
        while(flag==0){
           if(codigo==this.inventario[i].codigo){
            for( let j=i;j<this.inventario.length-1;j++){
                this.inventario[j]=this.inventario[j+1];
            }
            this.inventario.pop()
            flag=1;
            }else if(i>this.inventario.length){
                flag=1;
            }
           i++;
        }
    }
    
    buscar(codigo){
        let i = 0;
        let flag = 0;
        while(flag==0){
           if(codigo==this.inventario[i].codigo){
            return(this.inventario[i]);
            flag=1;
            }else if(i>this.inventario.length){
                flag=1;
            }
           i++;
        }

    }

    listado(){
        return(this.inventario);
    }

    listadoInverso(){
        let vi=[];
        for(let i=0; i<this.inventario.length; i++){
            vi[i]=this.inventario[this.inventario.length-1-i];
        }
        return(vi);
    }

    modificar(codigo,aspecto,cambio){
        let i = 0;
        let flag = 0;
        while(flag==0){
           if(codigo==this.inventario[i].codigo){
            
            switch(aspecto){
                case "codigo":
                    this.inventario[i].codigo = cambio;
                    break;
                case "nombre":
                    this.inventario[i].nombre = cambio;
                    break;
                case "cantidad":
                    this.inventario[i].cantidad = cambio;
                    break;
                case "costo":
                    this.inventario[i].costo = cambio;
                    break;
            }

            flag=1;
            }else if(i>this.inventario.length){
                flag=1;
            }
           i++;
        }
    }

}

class Producto{

    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

}

let productos = new Inventario();

function agregar2(){
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let costo = Number(document.getElementById("costo").value);

    let  producto = new Producto(codigo,nombre,cantidad,costo);
    productos.agregar(producto);
    console.log(productos);
}

function eliminar2(){
    let codigo = document.getElementById("eliminar").value;
    productos.eliminar(codigo);
}

function buscar2(){
    let codigo = document.getElementById("buscar").value;
    let producto = productos.buscar(codigo);
    let tablaproducto = document.getElementById("buscarProductos");
let cuerpotabla = document.createElement("tbody"); 

let fila = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = producto.codigo;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = producto.nombre;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = producto.cantidad;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = producto.costo;
    fila.appendChild(td);

    cuerpotabla.appendChild(fila);

    tablaproducto.appendChild(cuerpotabla);

}

function listar(){
    let x = productos.listado();
    let tablaproducto = document.getElementById("productos");
let cuerpotabla = document.createElement("tbody"); 

x.forEach(p => {
    let fila = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = p.codigo;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.nombre;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.cantidad;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.costo;
    fila.appendChild(td);

    cuerpotabla.appendChild(fila);
});

tablaproducto.appendChild(cuerpotabla);
}

function listarInvert(){
    let x = productos.listadoInverso();
    let tablaproducto = document.getElementById("productos2");
let cuerpotabla = document.createElement("tbody"); 

x.forEach(p => {
    let fila = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = p.codigo;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.nombre;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.cantidad;
    fila.appendChild(td);

    td = document.createElement("td");
    td.innerText = p.costo;
    fila.appendChild(td);

    cuerpotabla.appendChild(fila);
});

tablaproducto.appendChild(cuerpotabla);
}


function modificar2(){
        
}





let guitarra =  new Producto("2xp3","guitarra",4,60);
let piano =  new Producto("3ij2","piano",10,100);
let violin =  new Producto("3ty5","violin",32,70);
let bateria =  new Producto("7yu0","bateria",1,123);
let flauta =  new Producto("9bn2","flauta",1942,0);

productos.agregar(guitarra);
productos.agregar(piano);
productos.agregar(violin);
productos.agregar(bateria);






