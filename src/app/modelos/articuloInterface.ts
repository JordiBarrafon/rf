import { TipoArticulo } from './TipoArticulo.enum';
export interface ArticuloInterface {
  id?: number;
  fechaCreacion?: Date,
  nombre: string;
  descripcion: string;
  tipo: TipoArticulo;
}
