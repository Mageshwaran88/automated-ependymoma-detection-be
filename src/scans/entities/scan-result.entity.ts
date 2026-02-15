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

  @Column({ name: 'imagepath', type: 'varchar', nullable: true })
  imagePath: string | null;

  @Column({ name: 'scan_id', unique: true })
  scan_id: string;

  @Column({ name: 'timestamp', type: 'timestamptz' })
  timestamp: Date;

  @Column({ name: 'patient_id' })
  patient_id: string;

  @Column({ name: 'scan_type' })
  scan_type: string;

  @Column({ name: 'detected', default: false })
  detected: boolean;

  @Column({ name: 'confidence', type: 'decimal', precision: 5, scale: 2, default: 0 })
  confidence: number;

  @Column({ name: 'location', default: '' })
  location: string;

  @Column({ name: 'grade', default: '' })
  grade: string;

  @Column({ name: 'volume', type: 'decimal', precision: 8, scale: 2, default: 0 })
  volume: number;

  @Column({ name: 'max_diameter', type: 'decimal', precision: 8, scale: 2, default: 0 })
  max_diameter: number;

  @Column({ name: 'processing_time', type: 'decimal', precision: 6, scale: 2, default: 0 })
  processing_time: number;

  @Column({ name: 'reason', type: 'text', nullable: true })
  reason: string | null;

  @Column({ name: 'report', type: 'jsonb', nullable: true })
  report: string[] | null;

  @Column({ name: 'report_text', type: 'text', nullable: true })
  report_text: string | null;

  @CreateDateColumn({ name: 'createdat', type: 'timestamptz' })
  createdAt: Date;
}
