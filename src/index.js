const app = require('./app');

async function main() {
    await app.listen(app.get('port'));
    console.log('Conectado al servidor port', app.get('port'));
}

main();