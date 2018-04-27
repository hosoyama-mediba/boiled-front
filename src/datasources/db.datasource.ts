import {DataSourceConstructor, juggler} from '@loopback/repository';

export const db = new DataSourceConstructor({
    "name": "db",
    "connector": "mysql",
    "host": "mysql",
    "port": 3306,
    "database": "front",
    "user": "mysql",
    "password": "mysql"
});
