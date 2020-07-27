import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnTypeToRegistries1595727066422 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('registries', new TableColumn({
            name: 'type',
            type: 'varchar',
            isNullable: false,
            enum: ['income', 'outcome']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('registries', 'type');
    }

}
