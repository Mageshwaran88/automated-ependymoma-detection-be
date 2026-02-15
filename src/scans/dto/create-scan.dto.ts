import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsDateString,
  IsArray,
} from 'class-validator';

export class CreateScanDto {
  @IsString()
  scan_id: string;

  @IsDateString()
  timestamp: string;

  @IsString()
  patient_id: string;

  @IsString()
  scan_type: string;

  @IsBoolean()
  detected: boolean;

  @IsNumber()
  confidence: number;

  @IsString()
  location: string;

  @IsString()
  grade: string;

  @IsNumber()
  volume: number;

  @IsNumber()
  max_diameter: number;

  @IsNumber()
  processing_time: number;

  @IsOptional()
  @IsString()
  imagePath?: string;

  @IsOptional()
  @IsString()
  reason?: string;

  // ✅ MUST BE ARRAY
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  report?: string[];

  @IsOptional()
  @IsString()
  report_text?: string;
}
