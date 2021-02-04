import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import Categoria from './Categoria'
import Marca from './Marca'

@Entity('produtos')
class Produto {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  nome: string

  @Column('float')
  valor: number

  @Column()
  marca_id: string

  @ManyToOne(() => Marca)
  @JoinColumn({ name: 'marca_id' })
  marca: Marca

  @Column()
  categoria_id: string

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria

  @Column('tinyint')
  numero_estoque: number

  @Column()
  local_saida: string

  @Column('text')
  descricao: string

  @Column('tinyint')
  quantidade_fotos: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Produto
