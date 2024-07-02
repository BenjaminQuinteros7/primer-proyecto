export interface Usuario {
    Uid: string | any; // atributos del tipo "any" reciben vacíos o indefinidos
    Nombre: string;
    Apellido: string;
    Email: string;
    Rol: string;
    Password: string;
}