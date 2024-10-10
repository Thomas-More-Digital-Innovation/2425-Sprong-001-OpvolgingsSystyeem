import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTaakTable1728568607679 implements MigrationInterface {
    name = 'CreateTaakTable1728568607679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "taak" ("taakID" SERIAL NOT NULL, "naam" character varying NOT NULL, "groepGroepID" integer, CONSTRAINT "PK_1c29cf4c9b095ef3d6d4204bd4b" PRIMARY KEY ("taakID"))`);
        await queryRunner.query(`ALTER TABLE "taak" ADD CONSTRAINT "FK_e7aec7e4da16c033703681e6f43" FOREIGN KEY ("groepGroepID") REFERENCES "groep"("groepID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "taak" DROP CONSTRAINT "FK_e7aec7e4da16c033703681e6f43"`);
        await queryRunner.query(`DROP TABLE "taak"`);
    }

}
