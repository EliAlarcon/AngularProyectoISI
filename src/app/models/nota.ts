import { Tarea } from "./tarea";
import { Usuario } from "./usuario";

export interface Nota {
    idNota: number;
    tarea: Tarea;
    estudiante: Usuario;
    nota: number;
  }