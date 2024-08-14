import { Carrera } from "./carrera";
import { Curso } from "./curso";
import { Usuario } from "./Usuario";

export interface Inscripcion {
    idInscripcion: number;
    estudiante: Usuario;
    carrera: Carrera;
    curso: Curso;
    fechaInscripcion: Date;
  }