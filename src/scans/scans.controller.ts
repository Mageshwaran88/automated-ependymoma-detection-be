import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ScansService } from './scans.service';
import { CreateScanDto } from './dto/create-scan.dto';

@Controller('scan')
export class ScansController {
  constructor(private readonly scansService: ScansService) {}

  // POST /scan/image
  @Post('image')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateScanDto) {
    try {
      const scan = await this.scansService.create(dto);
      return {
        id: scan.id,
        scan_id: scan.scan_id,
        message: 'Scan result saved successfully',
      };
    } catch (err: any) {
      const message = err?.message || String(err);
      const code = err?.code || err?.driverError?.code;
      console.error('POST /scan/image failed:', code, message);
      throw new HttpException(
        { message: 'Scan save failed', error: message, code: code || 'UNKNOWN' },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // GET /scan/history — list all scan results (must be before :scan_id)
  @Get('history')
  async getHistory() {
    return this.scansService.findAll();
  }

  // GET /scan — list all (alias)
  @Get()
  async findAll() {
    return this.scansService.findAll();
  }

  // GET /scan/:scan_id — single scan by scan_id
  @Get(':scan_id')
  async findOne(@Param('scan_id') scan_id: string) {
    return this.scansService.findByScanId(scan_id);
  }
}
