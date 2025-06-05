import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDisplayTable1749150721595 implements MigrationInterface {
    name = 'CreateDisplayTable1749150721595'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "displays" ("id" SERIAL NOT NULL, "created_by" integer, "updated_by" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "activate" boolean NOT NULL, "name" character varying NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_b60ee7f4fef83b8d211012e0c0c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "displays"`);
    }

}
