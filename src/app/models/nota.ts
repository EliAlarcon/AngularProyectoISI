import { Tarea } from "./tarea";
import { Usuario } from "./Usuario";

export interface Nota {
    idNota: number;
    tarea: Tarea;
    estudiante: Usuario;
    nota: number;
  }