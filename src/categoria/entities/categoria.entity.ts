import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias_frm"})
export class Categoria {

    @ApiProperty() 
    @PrimaryGeneratedColumn()    
    id: number

    @ApiProperty() 
    @IsNotEmpty()
    @Column({ type:"varchar", length: 255, nullable: false })
    nome: string

    @ApiProperty() 
    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
    
}