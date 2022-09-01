import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Registros} from '../models';
import {RegistrosRepository} from '../repositories';

export class ServicioController {
  constructor(
    @repository(RegistrosRepository)
    public registrosRepository : RegistrosRepository,
  ) {}

  @post('/servicio')
  @response(200, {
    description: 'Registros model instance',
    content: {'application/json': {schema: getModelSchemaRef(Registros)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registros, {
            title: 'NewRegistros',
            exclude: ['_id'],
          }),
        },
      },
    })
    registros: Omit<Registros, '_id'>,
  ): Promise<Registros> {
    return this.registrosRepository.create(registros);
  }

  @get('/servicio/count')
  @response(200, {
    description: 'Registros model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Registros) where?: Where<Registros>,
  ): Promise<Count> {
    return this.registrosRepository.count(where);
  }

  @get('/servicio')
  @response(200, {
    description: 'Array of Registros model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Registros, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Registros) filter?: Filter<Registros>,
  ): Promise<Registros[]> {
    return this.registrosRepository.find(filter);
  }

  @patch('/servicio')
  @response(200, {
    description: 'Registros PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registros, {partial: true}),
        },
      },
    })
    registros: Registros,
    @param.where(Registros) where?: Where<Registros>,
  ): Promise<Count> {
    return this.registrosRepository.updateAll(registros, where);
  }

  @get('/servicio/{id}')
  @response(200, {
    description: 'Registros model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Registros, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Registros, {exclude: 'where'}) filter?: FilterExcludingWhere<Registros>
  ): Promise<Registros> {
    return this.registrosRepository.findById(id, filter);
  }

  @patch('/servicio/{id}')
  @response(204, {
    description: 'Registros PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Registros, {partial: true}),
        },
      },
    })
    registros: Registros,
  ): Promise<void> {
    await this.registrosRepository.updateById(id, registros);
  }

  @put('/servicio/{id}')
  @response(204, {
    description: 'Registros PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() registros: Registros,
  ): Promise<void> {
    await this.registrosRepository.replaceById(id, registros);
  }

  @del('/servicio/{id}')
  @response(204, {
    description: 'Registros DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.registrosRepository.deleteById(id);
  }
}
