import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('scan_results')
export class ScanResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  imagePath: string | null;

  @Column({ unique: true })
  scan_id: string;

  @Column({ type: 'timestamptz' })
  timestamp: Date;

  @Column()
  patient_id: string;

  @Column()
  scan_type: string;

  @Column({ default: false })
  detected: boolean;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  confidence: number;

  @Column({ default: '' })
  location: string;

  @Column({ default: '' })
  grade: string;

  @Column({ type: 'decimal', precision: 8, scale: 2, default: 0 })
  volume: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, default: 0 })
  max_diameter: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, default: 0 })
  processing_time: number;

  @Column({ type: 'text', nullable: true })
  reason: string | null;

  @Column({ type: 'jsonb', nullable: true })
  report: string[] | null;

  @Column({ type: 'text', nullable: true })
  report_text: string | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
