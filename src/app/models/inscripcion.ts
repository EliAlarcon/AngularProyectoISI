import { Carrera } from "./carrera";
import { Curso } from "./curso";
import { Usuario } from "./usuario";

export interface Inscripcion {
    idInscripcion: number;
    estudiante: Usuario;
    carrera: Carrera;
    curso: Curso;
    fechaInscripcion: Date;
  }