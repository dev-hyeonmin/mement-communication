import {
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export class CoreEntity {
    @PrimaryGeneratedColumn()
    @Column((type) => Number)
    id: number;

    @CreateDateColumn()
    @Column((type) => Date)
    createAt: Date;

    @UpdateDateColumn()
    @Column((type) => Date)
    updateAt: Date;
}