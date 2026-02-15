import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { ScansService } from './scans.service';
import { CreateScanDto } from './dto/create-scan.dto';

@Controller('scan')
export class ScansController {
  constructor(private readonly scansService: ScansService) {}

  // POST /scan/image
  @Post('image')
  async create(@Body() dto: CreateScanDto) {
    const scan = await this.scansService.create(dto);
    return {
      id: scan.id,
      scan_id: scan.scan_id,
      message: 'Scan result saved successfully',
    };
  }

  // GET /scan
  @Get()
  async findAll() {
    return this.scansService.findAll();
  }

  // GET /scan/:scan_id
  @Get(':scan_id')
  async findOne(@Param('scan_id') scan_id: string) {
    return this.scansService.findByScanId(scan_id);
  }
}
