import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('marcas')
class Marca {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  nome: string

  @Column('text')
  descricao: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Marca
