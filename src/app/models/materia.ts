import { Curso } from "./curso";
import { Usuario } from "./usuario";

export interface Materia {
    idMateria: number;
    nombre: string;
    descripcion: string;
    curso: Curso;
    profesor: Usuario;
  }