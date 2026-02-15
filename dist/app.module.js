"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const scans_module_1 = require("./scans/scans.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const dbUrl = config.get('DATABASE_URL');
                    if (!dbUrl) {
                        console.warn('DATABASE_URL not set — DB features will fail. Set DATABASE_URL in Railway Variables (e.g. Neon connection string).');
                    }
                    if (dbUrl) {
                        return {
                            type: 'postgres',
                            url: dbUrl,
                            autoLoadEntities: true,
                            synchronize: false,
                            ssl: { rejectUnauthorized: false },
                        };
                    }
                    return {
                        type: 'postgres',
                        host: 'localhost',
                        port: 5432,
                        username: 'postgres',
                        password: 'root',
                        database: 'automated-ependymoma-detection',
                        autoLoadEntities: true,
                        synchronize: true,
                    };
                }
            }),
            scans_module_1.ScansModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map