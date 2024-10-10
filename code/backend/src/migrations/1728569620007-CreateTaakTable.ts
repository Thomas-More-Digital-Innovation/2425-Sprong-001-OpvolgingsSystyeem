import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTaakTable1728569620007 implements MigrationInterface {
    name = 'CreateTaakTable1728569620007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "taak" DROP CONSTRAINT "FK_e7aec7e4da16c033703681e6f43"`);
        await queryRunner.query(`ALTER TABLE "taak" RENAME COLUMN "groepGroepID" TO "groepID"`);
        await queryRunner.query(`ALTER TABLE "taak" ADD CONSTRAINT "FK_cb50137229f41150881b973ec8c" FOREIGN KEY ("groepID") REFERENCES "groep"("groepID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "taak" DROP CONSTRAINT "FK_cb50137229f41150881b973ec8c"`);
        await queryRunner.query(`ALTER TABLE "taak" RENAME COLUMN "groepID" TO "groepGroepID"`);
        await queryRunner.query(`ALTER TABLE "taak" ADD CONSTRAINT "FK_e7aec7e4da16c033703681e6f43" FOREIGN KEY ("groepGroepID") REFERENCES "groep"("groepID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
