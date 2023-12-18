import { MigrationInterface, QueryRunner } from "typeorm";
import * as fs from 'fs';
import * as path from 'path';

export class SqlMigration implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const filePath = path.join(__dirname, '../sql/1-create-tables.sql');
        const sql = fs.readFileSync(filePath, { encoding: 'utf8' });
        await queryRunner.query(sql);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // 可以在此处写入回滚逻辑，如果可回滚
    }

}
