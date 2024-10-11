import { MigrationInterface, QueryRunner } from "typeorm";

export class DBSet1728649064925 implements MigrationInterface {
    name = 'DBSet1728649064925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "opleiding_gebruiker" ("opleidingGebruikerID" SERIAL NOT NULL, "opleidingID" integer, "gebruikerID" integer, CONSTRAINT "PK_7c44140f2faccc54c5a066f72be" PRIMARY KEY ("opleidingGebruikerID"))`);
        await queryRunner.query(`CREATE TABLE "gebruiker" ("gebruikerID" SERIAL NOT NULL, "voornaam" character varying NOT NULL, "achternaam" character varying NOT NULL, "straat" character varying, "huisNummer" character varying, "postcode" character varying, "woonplaats" character varying, "ICENaam" character varying, "ICETelefoonnummer" character varying, "foto" character varying, "rolRolID" integer, "subgroepID" integer, CONSTRAINT "PK_04f23255808dec2688086aa4f35" PRIMARY KEY ("gebruikerID"))`);
        await queryRunner.query(`ALTER TABLE "opleiding_gebruiker" ADD CONSTRAINT "FK_220bd2352e40cb3c5b119bacbd7" FOREIGN KEY ("opleidingID") REFERENCES "opleiding"("opleidingID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "opleiding_gebruiker" ADD CONSTRAINT "FK_f0a930dfdc810be1c0cd271ea18" FOREIGN KEY ("gebruikerID") REFERENCES "gebruiker"("gebruikerID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gebruiker" ADD CONSTRAINT "FK_aab0cabf81b7de1ad39c0dce2c8" FOREIGN KEY ("rolRolID") REFERENCES "rol"("rolID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gebruiker" ADD CONSTRAINT "FK_d037dc45316c3deb359416d814d" FOREIGN KEY ("subgroepID") REFERENCES "subgroep"("subgroepID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gebruiker" DROP CONSTRAINT "FK_d037dc45316c3deb359416d814d"`);
        await queryRunner.query(`ALTER TABLE "gebruiker" DROP CONSTRAINT "FK_aab0cabf81b7de1ad39c0dce2c8"`);
        await queryRunner.query(`ALTER TABLE "opleiding_gebruiker" DROP CONSTRAINT "FK_f0a930dfdc810be1c0cd271ea18"`);
        await queryRunner.query(`ALTER TABLE "opleiding_gebruiker" DROP CONSTRAINT "FK_220bd2352e40cb3c5b119bacbd7"`);
        await queryRunner.query(`DROP TABLE "gebruiker"`);
        await queryRunner.query(`DROP TABLE "opleiding_gebruiker"`);
    }

}
