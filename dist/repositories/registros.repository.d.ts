import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Registros, RegistrosRelations } from '../models';
export declare class RegistrosRepository extends DefaultCrudRepository<Registros, typeof Registros.prototype._id, RegistrosRelations> {
    constructor(dataSource: MongoDataSource);
}
