import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm'

export default class CreateProdutos1612007584607 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'produtos',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'valor',
            type: 'float',
          },
          {
            name: 'marca_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'categoria_id',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'descricao',
            type: 'text',
          },
          {
            name: 'numero_estoque',
            type: 'smallint',
          },
          {
            name: 'desconto_produto',
            type: 'tinyint',
            default: '0',
          },
          {
            name: 'local_saida',
            type: 'varchar',
          },
          {
            name: 'quantidade_fotos',
            type: 'tinyint',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
    await queryRunner.createForeignKey(
      'produtos',
      new TableForeignKey({
        columnNames: ['marca_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'marcas',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }),
    )
    await queryRunner.createForeignKey(
      'produtos',
      new TableForeignKey({
        columnNames: ['categoria_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'categorias',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('produtos')
  }
}
