export declare class ScanResult {
    id: string;
    imagePath: string | null;
    scan_id: string;
    timestamp: Date;
    patient_id: string;
    scan_type: string;
    detected: boolean;
    confidence: number;
    location: string;
    grade: string;
    volume: number;
    max_diameter: number;
    processing_time: number;
    reason: string | null;
    report: string[] | null;
    report_text: string | null;
    createdAt: Date;
}
