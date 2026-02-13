import { Repository } from 'typeorm';
import { ScanResult } from './entities/scan-result.entity';
import { CreateScanDto } from './dto/create-scan.dto';
export declare class ScansService {
    private readonly scanResultRepository;
    constructor(scanResultRepository: Repository<ScanResult>);
    create(dto: CreateScanDto): Promise<ScanResult>;
    findAll(): Promise<ScanResult[]>;
    findByScanId(scan_id: string): Promise<ScanResult | null>;
}
