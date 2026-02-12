import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScansService } from './scans.service';
import { CreateScanDto } from './dto/create-scan.dto';

@Controller('scan')
export class ScansController {
  constructor(private readonly scansService: ScansService) {}

  @Post('image')
  async create(@Body() dto: CreateScanDto) {
    const scan = await this.scansService.create(dto);
    return { id: scan.id, scan_id: scan.scan_id, message: 'Scan result saved' };
  }

  @Get()
  async findAll() {
    return this.scansService.findAll();
  }

  @Get(':scan_id')
  async findOne(@Param('scan_id') scan_id: string) {
    return this.scansService.findByScanId(scan_id);
  }
}
