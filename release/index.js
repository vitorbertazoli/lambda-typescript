"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_processor_1 = require("./processors/create-processor");
const update_processor_1 = require("./processors/update-processor");
exports.process = (event, context, callback) => {
    const body = JSON.parse(event.body);
    const statusCode = 200;
    switch (body.operation) {
        case 'create':
            console.log('create requested');
            const processor1 = new create_processor_1.CreateProcessor();
            processor1.process(body);
            break;
        case 'update':
            console.log('update requested');
            const processor2 = new update_processor_1.UpdateProcessor();
            processor2.process(body);
            break;
    }
    new Promise((resolve, reject) => resolve())
        .then(_ => callback(null, { statusCode, body: body.operation }))
        .catch(error => callback(error));
};
//# sourceMappingURL=index.js.map