"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ServicioController = class ServicioController {
    constructor(registrosRepository) {
        this.registrosRepository = registrosRepository;
    }
    async create(registros) {
        return this.registrosRepository.create(registros);
    }
    async count(where) {
        return this.registrosRepository.count(where);
    }
    async find(filter) {
        return this.registrosRepository.find(filter);
    }
    async updateAll(registros, where) {
        return this.registrosRepository.updateAll(registros, where);
    }
    async findById(id, filter) {
        return this.registrosRepository.findById(id, filter);
    }
    async updateById(id, registros) {
        await this.registrosRepository.updateById(id, registros);
    }
    async replaceById(id, registros) {
        await this.registrosRepository.replaceById(id, registros);
    }
    async deleteById(id) {
        await this.registrosRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/servicio'),
    (0, rest_1.response)(200, {
        description: 'Registros model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Registros) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Registros, {
                    title: 'NewRegistros',
                    exclude: ['_id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicio/count'),
    (0, rest_1.response)(200, {
        description: 'Registros model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Registros)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicio'),
    (0, rest_1.response)(200, {
        description: 'Array of Registros model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Registros, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Registros)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/servicio'),
    (0, rest_1.response)(200, {
        description: 'Registros PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Registros, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Registros)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Registros, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/servicio/{id}'),
    (0, rest_1.response)(200, {
        description: 'Registros model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Registros, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Registros, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/servicio/{id}'),
    (0, rest_1.response)(204, {
        description: 'Registros PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Registros, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Registros]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/servicio/{id}'),
    (0, rest_1.response)(204, {
        description: 'Registros PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Registros]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/servicio/{id}'),
    (0, rest_1.response)(204, {
        description: 'Registros DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ServicioController.prototype, "deleteById", null);
ServicioController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RegistrosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RegistrosRepository])
], ServicioController);
exports.ServicioController = ServicioController;
//# sourceMappingURL=servicio.controller.js.map