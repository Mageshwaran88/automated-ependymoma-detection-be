import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScanResult } from './entities/scan-result.entity';
import { CreateScanDto } from './dto/create-scan.dto';

@Injectable()
export class ScansService {
  constructor(
    @InjectRepository(ScanResult)
    private readonly scanResultRepository: Repository<ScanResult>,
  ) {}

  async create(dto: CreateScanDto): Promise<ScanResult> {
    const entity = this.scanResultRepository.create({
      imagePath: dto.imagePath ?? null,
      scan_id: dto.scan_id,
      timestamp: new Date(dto.timestamp),
      patient_id: dto.patient_id,
      scan_type: dto.scan_type,
      detected: dto.detected,
      confidence: dto.confidence,
      location: dto.location,
      grade: dto.grade,
      volume: dto.volume,
      max_diameter: dto.max_diameter,
      processing_time: dto.processing_time,
      reason: dto.reason ?? null,
      report: dto.report ? dto.report : null,
      report_text: dto.report_text ?? null,
    });
    return this.scanResultRepository.save(entity);
  }

  async findAll(): Promise<ScanResult[]> {
    return this.scanResultRepository.find({
      order: { timestamp: 'DESC' },
    });
  }

  async findByScanId(scan_id: string): Promise<ScanResult | null> {
    return this.scanResultRepository.findOne({ where: { scan_id } });
  }
}
