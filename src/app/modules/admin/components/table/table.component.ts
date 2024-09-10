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

  //definimos formulario para los productos
  /* 
  _ Atributos alfanuméricos (string) se inicializan con comillas simples
  _ Atributos numéricos (number) se inicializan con cero ('0')
  */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
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
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      };
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Agrego un nuevo producto exitosamente");
          //Resetea el formulario y las casillas quedan vacías
          this.producto.reset();
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar un nuevo producto");
          //Resetea el formulario y las casillas quedan vacías
          this.producto.reset();
        })
    }
  };

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
    /* Toma los valores del producto seleccionado y los va a autocompletar en el formulario del modal (menos el "ID") */
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
      /* los demás atributos reciben nueva información/valor desde el formulario */
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      descripcion: this.producto.value.descripcion!,
      categoria: this.producto.value.categoria!,
      imagen: this.producto.value.imagen!,
      alt: this.producto.value.alt!
    }

    //enviamos al método el id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos).then(producto => {
      alert("el producto se ha modificado con éxito")
      this.producto.reset()
    })
      .catch(error => {
        alert("Hubo un problema al modificar el producto: \n" + error)
        this.producto.reset()
      })
  }
}
