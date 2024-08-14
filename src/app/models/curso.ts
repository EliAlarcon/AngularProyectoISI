import { Carrera } from "./carrera";

export interface Curso {
    idCurso: number;
    nombre: string;
    descripcion: string;
    carrera: Carrera;
  }