import { Materia } from "./materia";

export interface Tarea {
    idTarea: number;
    nombre: string;
    descripcion: string;
    materia: Materia;
  }