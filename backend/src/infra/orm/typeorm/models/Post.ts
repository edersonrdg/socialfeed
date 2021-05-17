import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Users from './User'

@Entity('posts')
class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  image: string

  @Column()
  description?: string

  @Column()
  authorId: string

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'authorId' })
  Author: Users

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Posts
