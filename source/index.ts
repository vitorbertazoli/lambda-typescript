import { Context, Callback, APIGatewayEvent } from "aws-lambda";
import {CreateProcessor} from './processors/create-processor';
import {UpdateProcessor} from './processors/update-processor';

exports.process = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    const body = JSON.parse(event.body);
    const statusCode: number = 200;

    switch (body.operation) {
        case 'create':
            console.log('create requested');
            const processor1: CreateProcessor = new CreateProcessor();
            processor1.process(body);
            break;
        case 'update':
            console.log('update requested');
            const processor2: UpdateProcessor = new UpdateProcessor();
            processor2.process(body);
            break;
    }

    new Promise((resolve, reject) => resolve())
        .then(_ => callback(null, { statusCode, body: body.operation }))
        .catch(error => callback(error))
};