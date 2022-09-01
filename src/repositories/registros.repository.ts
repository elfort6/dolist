import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Registros, RegistrosRelations} from '../models';

export class RegistrosRepository extends DefaultCrudRepository<
  Registros,
  typeof Registros.prototype._id,
  RegistrosRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Registros, dataSource);
  }
}
