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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanResult = void 0;
const typeorm_1 = require("typeorm");
let ScanResult = class ScanResult {
};
exports.ScanResult = ScanResult;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ScanResult.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'imagepath', type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], ScanResult.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'scan_id', unique: true }),
    __metadata("design:type", String)
], ScanResult.prototype, "scan_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'timestamp', type: 'timestamptz' }),
    __metadata("design:type", Date)
], ScanResult.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'patient_id' }),
    __metadata("design:type", String)
], ScanResult.prototype, "patient_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'scan_type' }),
    __metadata("design:type", String)
], ScanResult.prototype, "scan_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'detected', default: false }),
    __metadata("design:type", Boolean)
], ScanResult.prototype, "detected", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'confidence', type: 'decimal', precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], ScanResult.prototype, "confidence", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'location', default: '' }),
    __metadata("design:type", String)
], ScanResult.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'grade', default: '' }),
    __metadata("design:type", String)
], ScanResult.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'volume', type: 'decimal', precision: 8, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], ScanResult.prototype, "volume", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'max_diameter', type: 'decimal', precision: 8, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], ScanResult.prototype, "max_diameter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'processing_time', type: 'decimal', precision: 6, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], ScanResult.prototype, "processing_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reason', type: 'text', nullable: true }),
    __metadata("design:type", Object)
], ScanResult.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'report', type: 'jsonb', nullable: true }),
    __metadata("design:type", Object)
], ScanResult.prototype, "report", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'report_text', type: 'text', nullable: true }),
    __metadata("design:type", Object)
], ScanResult.prototype, "report_text", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdat', type: 'timestamptz' }),
    __metadata("design:type", Date)
], ScanResult.prototype, "createdAt", void 0);
exports.ScanResult = ScanResult = __decorate([
    (0, typeorm_1.Entity)('scan_results')
], ScanResult);
//# sourceMappingURL=scan-result.entity.js.map