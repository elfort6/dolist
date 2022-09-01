import { Entity } from '@loopback/repository';
export declare class Registros extends Entity {
    _id?: string;
    tarea?: string;
    descripcion?: string;
    fecha_creacion?: string;
    fecha_realizar?: string;
    constructor(data?: Partial<Registros>);
}
export interface RegistrosRelations {
}
export declare type RegistrosWithRelations = Registros & RegistrosRelations;
