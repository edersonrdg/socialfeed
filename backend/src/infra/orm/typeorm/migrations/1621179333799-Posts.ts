import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class Posts1621179333799 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'image',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'authorId',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      }))

    await queryRunner.createForeignKey('posts', new TableForeignKey({
      name: 'Author',
      columnNames: ['authorId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts')
  }
}
