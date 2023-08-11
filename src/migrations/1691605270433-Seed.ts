import { MigrationInterface, QueryRunner } from 'typeorm';
import { config } from 'dotenv';
config();

export class CreateTables1691496442638 implements MigrationInterface {
  name = 'CreateTables1691496442638';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(
    //   `DROP DATABASE IF EXISTS \`${process.env.DATABASE_NAME}\``,
    // );
    // console.log('database dropped');
    // await queryRunner.query(
    //   `CREATE DATABASE IF NOT EXISTS \`${process.env.DATABASE_NAME}\``,
    // );
    // console.log('database created');
    await queryRunner.query(`USE \`${process.env.DATABASE_NAME}\``);
    console.log('database used');
    await queryRunner.query(`DROP TABLE IF EXISTS \`user\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`purchase\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`purchase_line\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`product\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`cart_line\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`cart\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`event\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`crew\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`iss_module\``);
    await queryRunner.query(`DROP TABLE IF EXISTS \`mission\``);
    console.log('tables dropped');

    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NULL, \`lastName\` varchar(255) NULL, \`email\` varchar(255) NOT NULL, \`address\` varchar(255) NULL, \`hashedPassword\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NULL, \`role\` varchar(255) NOT NULL DEFAULT 'user', \`isActive\` tinyint NOT NULL DEFAULT 1, \`purchasesId\` int NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NULL, \`image\` varchar(255) NOT NULL, \`price\` float NOT NULL, \`stock\` int NOT NULL DEFAULT '50', \`category\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`purchase\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(255) NOT NULL, \`date\` date NOT NULL DEFAULT CURRENT_TIMESTAMP(), \`total\` float NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`purchase_line\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`productId\` int NULL, \`purchaseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cart_line\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`productId\` int NULL, \`cartId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cart\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`title\` varchar(255) NOT NULL, \`picture\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`crew\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`nation\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`picture\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`iss_module\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`picture\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`mission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`domain\` varchar(255) NOT NULL, \`description\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_4ed21f53a3f002e7ca970522a0e\` FOREIGN KEY (\`purchasesId\`) REFERENCES \`purchase\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_33520b6c46e1b3971c0a649d38b\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase_line\` ADD CONSTRAINT \`FK_ec3f3194c3766205a1ab8f2c3d4\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase_line\` ADD CONSTRAINT \`FK_5e5b05ec9f4051800c8bd4fa5b6\` FOREIGN KEY (\`purchaseId\`) REFERENCES \`purchase\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cart_line\` ADD CONSTRAINT \`FK_bba9f61cbfb50ffc82ede132127\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`cart_line\` ADD CONSTRAINT \`FK_e4ebe82255b564027ae01acd239\` FOREIGN KEY (\`cartId\`) REFERENCES \`cart\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`cart_line\` DROP FOREIGN KEY \`FK_e4ebe82255b564027ae01acd239\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`cart_line\` DROP FOREIGN KEY \`FK_bba9f61cbfb50ffc82ede132127\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase_line\` DROP FOREIGN KEY \`FK_5e5b05ec9f4051800c8bd4fa5b6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase_line\` DROP FOREIGN KEY \`FK_ec3f3194c3766205a1ab8f2c3d4\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_33520b6c46e1b3971c0a649d38b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_4ed21f53a3f002e7ca970522a0e\``,
    );
    await queryRunner.query(`DROP TABLE \`mission\``);
    await queryRunner.query(`DROP TABLE \`iss_module\``);
    await queryRunner.query(`DROP TABLE \`crew\``);
    await queryRunner.query(`DROP TABLE \`event\``);
    await queryRunner.query(`DROP TABLE \`cart\``);
    await queryRunner.query(`DROP TABLE \`cart_line\``);
    await queryRunner.query(`DROP TABLE \`product\``);
    await queryRunner.query(`DROP TABLE \`purchase_line\``);
    await queryRunner.query(`DROP TABLE \`purchase\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
