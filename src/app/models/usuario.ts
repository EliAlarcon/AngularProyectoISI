export interface Usuario {
    idUsuario: number;
    nombre: string;
    apellido: string;
    email: string;
    contrasena: string;
    tipo: 'Estudiante' | 'Profesor' | 'Administrador';
  }