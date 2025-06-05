"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'mahan',
    password: 'mahan',
    database: 'mydb02',
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*.ts'],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map