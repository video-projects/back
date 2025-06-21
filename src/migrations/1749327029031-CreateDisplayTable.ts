import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDisplayTable1749327029031 implements MigrationInterface {
  name = 'CreateDisplayTable1749327029031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "displays" ("id" SERIAL NOT NULL, "reference" character varying NOT NULL, "slug" character varying NOT NULL, "name" character varying NOT NULL, "title" character varying NOT NULL, "type" character varying NOT NULL, "created_by" integer, "updated_by" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "activate" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_7fc56e81e38fcdb243246e8a75a" UNIQUE ("reference"), CONSTRAINT "UQ_2945ffed6eaa466a1cef36699d9" UNIQUE ("slug"), CONSTRAINT "PK_b60ee7f4fef83b8d211012e0c0c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7fc56e81e38fcdb243246e8a75" ON "displays" ("reference") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2945ffed6eaa466a1cef36699d" ON "displays" ("slug") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2945ffed6eaa466a1cef36699d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7fc56e81e38fcdb243246e8a75"`,
    );
    await queryRunner.query(`DROP TABLE "displays"`);
  }
}
