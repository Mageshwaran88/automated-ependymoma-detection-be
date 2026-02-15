"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScansService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const scan_result_entity_1 = require("./entities/scan-result.entity");
let ScansService = class ScansService {
    constructor(scanResultRepository) {
        this.scanResultRepository = scanResultRepository;
    }
    async create(dto) {
        const num = (v) => (v === undefined || v === null ? 0 : Number(v));
        const entity = this.scanResultRepository.create({
            imagePath: dto.imagePath ?? null,
            scan_id: String(dto.scan_id),
            timestamp: new Date(dto.timestamp),
            patient_id: String(dto.patient_id),
            scan_type: String(dto.scan_type),
            detected: Boolean(dto.detected),
            confidence: num(dto.confidence),
            location: String(dto.location ?? ''),
            grade: String(dto.grade ?? ''),
            volume: num(dto.volume),
            max_diameter: num(dto.max_diameter),
            processing_time: num(dto.processing_time),
            reason: dto.reason ?? null,
            report: Array.isArray(dto.report) ? dto.report : (dto.report_text ? [String(dto.report_text)] : null),
            report_text: dto.report_text ?? null,
        });
        return await this.scanResultRepository.save(entity);
    }
    async findAll() {
        return this.scanResultRepository.find({
            order: { timestamp: 'DESC' },
        });
    }
    async findByScanId(scan_id) {
        return this.scanResultRepository.findOne({ where: { scan_id } });
    }
};
exports.ScansService = ScansService;
exports.ScansService = ScansService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(scan_result_entity_1.ScanResult)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScansService);
//# sourceMappingURL=scans.service.js.map