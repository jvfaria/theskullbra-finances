import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRegistryTable1595707960979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'registries',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'value',
                    type: 'varchar',
                    isNullable: false,
                    default: 0  
                },
                {
                    name: 'category',
                    type: 'varchar',
                    isNullable: false,

                },
                {
                    name: 'created_at',
                    type: 'date',
                    default: 'now()'
                }
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('registries');
    }

}
