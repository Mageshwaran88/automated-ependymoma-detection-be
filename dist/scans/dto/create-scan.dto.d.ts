export declare class CreateScanDto {
    scan_id: string;
    timestamp: string;
    patient_id: string;
    scan_type: string;
    detected: boolean;
    confidence: number;
    location: string;
    grade: string;
    volume: number;
    max_diameter: number;
    processing_time: number;
    imagePath?: string;
    reason?: string;
    report?: string[];
    report_text?: string;
}
