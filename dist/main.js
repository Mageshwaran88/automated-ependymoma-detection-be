"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./crypto-polyfill");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((req, res, next) => {
        if (req.method === 'OPTIONS') {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            res.setHeader('Access-Control-Max-Age', '86400');
            return res.status(204).end();
        }
        next();
    });
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: false,
    });
    const port = process.env.PORT || 7000;
    await app.listen(port, '0.0.0.0');
    console.log(`Nest app listening on 0.0.0.0:${port} (PORT=${process.env.PORT ?? 'not set'})`);
}
bootstrap().catch((err) => {
    console.error('Fatal: app failed to start:', err?.message || err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map