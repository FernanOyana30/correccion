/*OBJETOS*/
class Producto {
    constructor (nombre, peso, precio, stock){
        this.nombre = nombre.toUpperCase()
        this.pesoxkg = parseFloat(peso)
        this.precio = parseFloat(precio)
        this.stock = parseFloat(stock)   
        this.vendido = false            
    }
    aumentarPrecio(porcAumento){
        this.precio*= porcAumento
    }
    aplicarDescuento(porcDescuento){
        this.precio*= porcDescuento
    }
    aumentarStock(nuevoStock){
        this.stock += nuevoStock
    }
    disminuirStock(nuevoStock){
        if(this.stock -= nuevoStock < 0){
            alert(`El producto ${this.nombre} no puede tener stock negativo`)   
        } else{
            this.stock -= nuevoStock
        }                  
    }    
    sumaIva() {
        this.precio = this.precio * 1,21
    }    
    vender() {
        this.vendido = true
    }
}

const producto1 = new Producto("Langostino pelado crudo", 1, 2990, 48)
const producto2 = new Producto("Tubo de calamar", 1, 1850, 50)
const producto3 = new Producto("Filet de merluza", 1, 870, 5)
const producto4 = new Producto("Mejillones pelados y congelados", 1, 1664, 2)
const producto5 = new Producto("Salmón rosado", 1, 6599, 1)
const producto6 = new Producto("Filet de abadejo congelado", 1, 1999, 35)
const producto7 = new Producto("Filet de lenguado", 1, 1799, 30)

/*ARRAY DE OBJETOS TIENDA*/
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7]

for(let i = 0 ; i < productos.length; i++){
    const producto = new Producto(prompt("Ingrese nombre del producto"), parseFloat(prompt("Ingrese peso xkg")), parseFloat(prompt("Ingrese precio")), parseFloat(prompt("Ingrese stock")))    
        productos.push(producto)    
        console.table(productos)    
        break            
}




        
        
     
             
        
     

    
              
 