import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Produto } from "../../produto/entities/produto.entity";


@Injectable()
export class DevpgService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'db_farmacia',
            entities: [Produto, Categoria],
            synchronize: true,
    };
  }
}