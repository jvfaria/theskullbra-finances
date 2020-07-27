import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('registries')
class Registry {
@PrimaryGeneratedColumn('uuid')
id: string

@Column()
title: string

@Column()
value: number

@Column()
category: string

@Column()
created_at: Date

}

export default Registry;