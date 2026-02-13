import { ScansService } from './scans.service';
import { CreateScanDto } from './dto/create-scan.dto';
export declare class ScansController {
    private readonly scansService;
    constructor(scansService: ScansService);
    create(dto: CreateScanDto): Promise<{
        id: string;
        scan_id: string;
        message: string;
    }>;
    findAll(): Promise<import("./entities/scan-result.entity").ScanResult[]>;
    findOne(scan_id: string): Promise<import("./entities/scan-result.entity").ScanResult | null>;
}
