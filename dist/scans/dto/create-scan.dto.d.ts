export declare class CreateScanDto {
    imagePath?: string | null;
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
    reason?: string | null;
    report?: string[] | null;
    report_text?: string | null;
}
