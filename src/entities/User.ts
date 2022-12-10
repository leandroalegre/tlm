import { 
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity } from 'typeorm'

@Entity()


export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nombre: string;
    
    @Column()
    Apellido: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    Mail: string;

    @Column()
    activo: boolean;

    @Column()
    cumple: Date;

    @Column()
    id_talle: number;

    @CreateDateColumn()
    createdAd: Date;

    @UpdateDateColumn()
    updateAdd: Date;
}