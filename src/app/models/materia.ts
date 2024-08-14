import { Curso } from "./curso";
import { Usuario } from "./Usuario";

export interface Materia {
    idMateria: number;
    nombre: string;
    descripcion: string;
    curso: Curso;
    profesor: Usuario;
  }