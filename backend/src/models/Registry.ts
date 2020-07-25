import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('registries')
class Registry {
@PrimaryGeneratedColumn('uuid')
id: string

@Column()
title: string

@Column()
category: string

@Column()
created_at: string

}

export default Registry;