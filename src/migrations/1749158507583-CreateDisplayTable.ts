import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDisplayTable1749158507583 implements MigrationInterface {
    name = 'CreateDisplayTable1749158507583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "displays" ("id" SERIAL NOT NULL, "reference" character varying NOT NULL, "slug" character varying NOT NULL, "name" character varying NOT NULL, "title" character varying NOT NULL, "type" character varying NOT NULL, "created_by" integer, "updated_by" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "activate" boolean NOT NULL, CONSTRAINT "UQ_7fc56e81e38fcdb243246e8a75a" UNIQUE ("reference"), CONSTRAINT "UQ_2945ffed6eaa466a1cef36699d9" UNIQUE ("slug"), CONSTRAINT "PK_b60ee7f4fef83b8d211012e0c0c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "displays"`);
    }

}
