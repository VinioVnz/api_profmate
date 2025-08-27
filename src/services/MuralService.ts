import { Timestamp } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Mural } from "../entities/Mural";
import { Usuario } from "../entities/Usuario";

const repo = AppDataSource.getRepository(Mural)
const Userrepo = AppDataSource.getRepository(Usuario)

export const MuralService = {
    async getAll(): Promise<Mural[]> {
        return await repo.find({
            relations: ["usuario"]
        })
    },

    async getOne(id: number): Promise<Mural | null> {
        return await repo.findOneBy({ id })
    },

    async create(data: { recado: string; usuario_id: number; dataHora: Date }): Promise<Mural | null> {
        const usuario = await Userrepo.findOneBy({ id: data.usuario_id });
        if (!usuario) return null;
    
        const mural = repo.create({
            recado: data.recado,
            dataHora: data.dataHora,
            usuario: usuario 
        });
    
        await repo.save(mural);
        return mural;
    },
    

    async update(id: number, data: { recado?: string; dataHora?: Date; usuario_id?: number }): Promise<Mural | null> {
        const mural = await repo.findOne({ where: { id }, relations: ["usuario"] });
        if (!mural) return null;

        if (data.recado) mural.recado = data.recado;
        if (data.dataHora) mural.dataHora = data.dataHora;

        if (data.usuario_id) {
            const usuario = await Userrepo.findOneBy({ id: data.usuario_id });
            if (!usuario) return null;
            mural.usuario = usuario;
        }

        await repo.save(mural)
        return mural
    },

    async delete(id: number): Promise<Mural | null> {
        const mural = await repo.findOneBy({ id })
        if (!mural) return null

        await repo.remove(mural)
        return mural;
    }

}