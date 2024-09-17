import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // ! <- tomar valores vacíos

  modalVisibleProducto: boolean = false;

  nombreImagen!: string; // obtendrá el nombre de la imagen

  imagen!: string; // obtendrá la ruta de la imagen


  // Definimos formulario para los productos
  /*
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    // imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    // subscribe -> método de notificación de cambios (observable)
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: '',
        alt: this.producto.value.alt!
      }

      // Enviamos nombre y url de la imagen; definimos carpeta de imágenes como "productos"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(resp => {
          // encapsulamos respuesta y envíamos la información obtenida
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              // ahora método crearProducto recibe datos del formulario y URL creada
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(producto => {
                  alert("Ha agregado un nuevo producto con éxito.");

                  // Resetea el formulario y las casillas quedan vacías
                  this.producto.reset();
                })
                .catch(error => {
                  alert("Ha ocurrido un error al cargar un producto.");

                  this.producto.reset();
                })
            })
        })
    }
  }

  // CARGAR IMÁGENES
  cargarImagen(event: any) {
    // Variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];

    // Variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader();

    if (archivo != undefined) {
      /*
        Llamamos a método readAsDataURL para leer toda la información recibida
        Envíamos como parámetro al "archivo" porque será el encargador de tener la 
        info ingresada por el usuario
      */
      reader.readAsDataURL(archivo);

      // Definimos qué haremos con la información mediante función flecha
      reader.onloadend = () => {
        let url = reader.result;

        // Condicionamos según una URL existente y no "nula"
        if (url != null) {
          // Definimos nombre de la imagen con atributo "name" del input
          this.nombreImagen = archivo.name;

          // Definimos ruta de la imagen según la url recibida
          this.imagen = url.toString();
        }
      }
    }
  }

  // ELIMINAR PRODUCTOS
  // función vinculada al modal y el botón de la tabla
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado;
  }

  borrarProducto() {
    //ahora enviamos tanto el ID del producto (para identificarlo en Firestore) y la URL de la imagen (para identificarlo en Storage)
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto, this.productoSeleccionado.imagen)
      .then(respuesta => {
        alert("Se ha podido eliminar con éxito.");
      })
      .catch(error => {
        alert("Ha ocurrido un error al eliminar un producto: \n" + error);
      })
  }

  // EDITAR PRODUCTOS
  // Se envía y llama al momento que tocamos botón "Editar" de la tabla
  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado;
    /*
      Toma los valores del producto seleccionado y los va a
      autocompletar en el formulario del modal (menos el ID y la URL  de la imagen)
    */
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      //imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  // VINCULA A BOTÓN "editarProducto" del modal de "Editar"
  editarProducto() {
    let datos: Producto = {
      // Solo idProducto no se modifica por el usuario
      idProducto: this.productoSeleccionado.idProducto,
      /* Los demás atributos reciben nueva información/ 
      valor desde el formulario */
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.productoSeleccionado.imagen,
      alt: this.producto.value.alt!
    }

    //verificamos si el usuario ingresa o no una nueva imagen
    if (this.imagen) {
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, 'productos')
        .then(resp => {
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              datos.imagen = url;

              this.actualizarProducto(datos); //actualizamos los datos

              this.producto.reset();
            })
            .catch(error => {
              alert("hubo un problema al subir la imagen \n" + error);
              this.producto.reset();
            })
        })
    } else { 
      //actualizamos el formulario con los datos recibidos del usuario, pero sin modificar la imagen ya existente en Firestore y en Storage
      this.actualizarProducto(datos);
     }

   
  }

  //actualiza la información ya existente de los productos
  actualizarProducto(datos : Producto){
     // Enviamos al método el id del producto seleccionado y los datos actualizados
     this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
     .then(producto => {
       alert("El producto se ha modificado con éxito.");
     })
     .catch(error => {
       alert("Hubo un problema al modificar el producto: \n" + error);
     })
  }
}



















































/*
import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  //creamos coleccion local de productos, la cual definimos como array
  coleccionProductos: Producto[] = [];
  productoSeleccionado!: Producto; // "!": significa que puede tomar valores vacíos
  modalVisibleProducto: boolean = false;
  nombreImagen!: string; // obtendrá el nombre de la imagen

  imagen!: string; // obtendrá la ruta de la imagen

  //definimos formulario para los productos
  /* 
  _ Atributos alfanuméricos (string) se inicializan con comillas simples
  _ Atributos numéricos (number) se inicializan con cero ('0')
  *//*
producto = new FormGroup({
nombre: new FormControl('', Validators.required),
precio: new FormControl(0, Validators.required),
descripcion: new FormControl('', Validators.required),
categoria: new FormControl('', Validators.required),
//imagen: new FormControl('', Validators.required),
alt: new FormControl('', Validators.required)
})

constructor(public servicioCrud: CrudService) { }

ngOnInit(): void {
this.servicioCrud.obtenerProductos().subscribe(producto => {
this.coleccionProductos = producto
})
};

async agregarProducto() {
if (this.producto.valid) {
let nuevoProducto: Producto = {
  idProducto: '',
  nombre: this.producto.value.nombre!,
  precio: this.producto.value.precio!,
  descripcion: this.producto.value.descripcion!,
  categoria: this.producto.value.categoria!,
  imagen: '',
  alt: this.producto.value.alt!
}

// Enviamos nombre y url de la imagen; definimos carpeta de imágenes como "productos"
await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
  .then(resp => {
    // encapsulamos respuesta y envíamos la información obtenida
    this.servicioCrud.obtenerUrlImagen(resp)
      .then(url => {
        // ahora método crearProducto recibe datos del formulario y URL creada
        this.servicioCrud.crearProducto(nuevoProducto, url)
          .then(producto => {
            alert("Ha agregado un nuevo producto con éxito.");

            // Resetea el formulario y las casillas quedan vacías
            this.producto.reset();
          })
          .catch(error => {
            alert("Ha ocurrido un error al cargar un producto.");

            this.producto.reset();
          })
      })
  })
}
}

// CARGAR IMÁGENES
cargarImagen(event: any){
// Variable para obtener el archivo subido desde el input del HTML
let archivo = event.target.files[0];

// Variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
let reader = new FileReader();

if(archivo != undefined){
/*
  Llamamos a método readAsDataURL para leer toda la información recibida
  Envíamos como parámetro al "archivo" porque será el encargador de tener la 
  info ingresada por el usuario
*//*
reader.readAsDataURL(archivo);

// Definimos qué haremos con la información mediante función flecha
reader.onloadend = () => {
let url = reader.result;

// Condicionamos según una URL existente y no "nula"
if(url != null){
// Definimos nombre de la imagen con atributo "name" del input
this.nombreImagen = archivo.name;

// Definimos ruta de la imagen según la url recibida
this.imagen = url.toString();
}
}
}
}

//Eliminar Productos
mostrarBorrar(productoSeleccionado: Producto) {
this.modalVisibleProducto = true;
this.productoSeleccionado = productoSeleccionado;
};

borrarProducto() {
this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
.then(respuesta => {
alert("el producto ha sido eliminado con éxito");
})
.catch(error => {
alert("no se ha podido eliminar el producto")
})
};

//Editar Productos
//se envía y se llama al momento que tocamos botón "editar" de la tabla
mostrarEditar(productoSeleccionado: Producto) {
this.productoSeleccionado = productoSeleccionado
/* Toma los valores del producto seleccionado y los va a autocompletar en el formulario del modal (menos el "ID") *//*
this.producto.setValue({
  nombre: productoSeleccionado.nombre,
  precio: productoSeleccionado.precio,
  descripcion: productoSeleccionado.descripcion,
  categoria: productoSeleccionado.categoria,
  imagen: productoSeleccionado.imagen,
  alt: productoSeleccionado.alt
})
}

//vincula a botón "editarProducto" del modal de "editar"
editarProductos() {
let datos: Producto = {
  //solo idProducto no se modifica por el usuario
  idProducto: this.productoSeleccionado.idProducto,
  /* los demás atributos reciben nueva información/valor desde el formulario *//*
nombre: this.producto.value.nombre!,
precio: this.producto.value.precio!,
descripcion: this.producto.value.descripcion!,
categoria: this.producto.value.categoria!,
imagen: this.producto.value.imagen!,
alt: this.producto.value.alt!
}

//enviamos al método el id del producto seleccionado y los datos actualizados
this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos).then(producto => {
alert("el producto se ha modificado con éxito");
this.producto.reset()
})
.catch(error => {
alert("Hubo un problema al modificar el producto: \n" + error);
this.producto.reset()
})
}
}
*/