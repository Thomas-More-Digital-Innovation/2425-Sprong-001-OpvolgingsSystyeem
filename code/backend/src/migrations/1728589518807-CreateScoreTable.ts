import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateScoreTable1728589518807 implements MigrationInterface {
    name = 'CreateScoreTable1728589518807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "score" ("scoreID" SERIAL NOT NULL, "scoreNaam" character varying NOT NULL, "waarde" double precision NOT NULL, CONSTRAINT "PK_e1b4ecb2676e7314e4551f3c6ce" PRIMARY KEY ("scoreID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "score"`);
    }

}
