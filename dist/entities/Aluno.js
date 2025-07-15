"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const typeorm_1 = require("typeorm");
const Aula_1 = require("./Aula");
let Aluno = class Aluno {
    id;
    nome;
    aulas;
};
exports.Aluno = Aluno;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Aluno.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Aluno.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Aula_1.Aula, aula => aula.aluno),
    __metadata("design:type", Array)
], Aluno.prototype, "aulas", void 0);
exports.Aluno = Aluno = __decorate([
    (0, typeorm_1.Entity)("alunos")
], Aluno);
