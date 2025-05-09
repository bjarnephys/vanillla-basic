const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        console.log(`message(): Http function processed request for url "${request.url}"`);
        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello(fra message), ${name}!` };
    }
});

//  http://localhost:4280?message2
app.http('message2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        console.log(`message2(): Http function processed request for url "${request.url}"`);
      
        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello(fra message2), ${name}!` };
    }
});