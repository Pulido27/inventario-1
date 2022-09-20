export class Inventario{

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
            }else if(i<this.inventario.length){
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
            console.log(this.inventario[i]);
            flag=1;
            }else if(i<this.inventario.length){
                flag=1;
            }
           i++;
        }

    }

    listado(){
        console.log(this.inventario);
    }

    listadoInverso(){
        let vi=[];
        for(let i=0; i<this.inventario.length; i++){
            vi[i]=this.inventario[this.inventario.length-1-i];
        }
        console.log(vi);
    }

    modificar(codigo){
        let i = 0;
        let flag = 0;
        while(flag==0){
           if(codigo==this.inventario[i].codigo){
            


            flag=1;
            }else if(i<this.inventario.length){
                flag=1;
            }
           i++;
        }
    }

}
