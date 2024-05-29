import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_produtos_frm"})
export class Produto {
   
    @ApiProperty() 
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty() 
    @IsNotEmpty()
    @Column({ type:"varchar", length: 255, nullable: false })
    nome: string

    @ApiProperty() 
    @Column({ type: "decimal", precision: 10, scale: 2 })
    preco: number

    @ApiProperty() 
    @Column({ type:"varchar", length: 5000, nullable: true })
    foto: string
    
    @ApiProperty({ type: () => Categoria }) 
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
    
}