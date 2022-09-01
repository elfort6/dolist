import {Entity, model, property} from '@loopback/repository';

@model()
export class Registros extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: number;

  @property({
    type: 'string',
  })
  tarea?: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'string',
  })
  fecha_creacion?: string;

  @property({
    type: 'string',
  })
  fecha_realizar?: string;


  constructor(data?: Partial<Registros>) {
    super(data);
  }
}

export interface RegistrosRelations {
  // describe navigational properties here
}

export type RegistrosWithRelations = Registros & RegistrosRelations;
