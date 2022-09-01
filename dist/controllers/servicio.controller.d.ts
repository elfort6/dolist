import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Registros } from '../models';
import { RegistrosRepository } from '../repositories';
export declare class ServicioController {
    registrosRepository: RegistrosRepository;
    constructor(registrosRepository: RegistrosRepository);
    create(registros: Omit<Registros, '_id'>): Promise<Registros>;
    count(where?: Where<Registros>): Promise<Count>;
    find(filter?: Filter<Registros>): Promise<Registros[]>;
    updateAll(registros: Registros, where?: Where<Registros>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Registros>): Promise<Registros>;
    updateById(id: string, registros: Registros): Promise<void>;
    replaceById(id: string, registros: Registros): Promise<void>;
    deleteById(id: string): Promise<void>;
}
