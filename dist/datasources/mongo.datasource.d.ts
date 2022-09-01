import {LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
export declare class MongoDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        url: process.env.URLMONGO;
        host: process.env.HOSTMONGO;
        port: process.env.PORTMONGO;
        user: process.env.USERMONGO;
        password: process.env.PASSWORDMONGO;
        database: process.env.DATBASEMONGO;
        useNewUrlParser: boolean;
    };
    constructor(dsConfig?: object);
}
