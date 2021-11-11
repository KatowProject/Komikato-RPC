const RPC = require('discord-rpc');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const clientId = '578144365009043466';
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {
    console.log('I\'m ready!');
});

app.post('/', function (req, res) {
    const request = req.body;

    switch (request.type) {
        case 'otakudesu':
            require('./router/otakudesu')(client, request);
            break;
        case 'komikindo':
            require('./router/komikindo')(client, request);
            break;
        case 'mangabat':
            require('./router/mangabat')(client, request);
            break;
        case 'komikato':
            require('./router/komikato.js')(client, request);
            break;
    }

    // switch (true) {
    //     case request.url.includes('otakudesu'):
    //         client.setActivity({
    //             state: `Episode ${episode}`,
    //             details: title,
    //             largeImageKey: "750342786825584811_1_",
    //             largeImageText: request.details,
    //             smallImageKey: 'otakudesu',
    //             smallImageText: 'otakudesu',
    //             instance: true
    //         });
    //         break;

    //     case request.url.includes('mangabat'):
    //         client.setActivity({
    //             state: request.state,
    //             details: request.details,
    //             largeImageKey: "750342786825584811_1_",
    //             largeImageText: request.largeText || request.title,
    //             smallImageKey: 'mangabat',
    //             smallImageText: 'mangabat',
    //             instance: true
    //         });
    //         break;

    //     case request.url.includes('komikindo'):
    //         client.setActivity({
    //             state: request.state,
    //             details: request.details,
    //             startTimestamp: new Date(),
    //             largeImageKey: "750342786825584811_1_",
    //             largeImageText: request.largeText || request.title,
    //             smallImageKey: 'komikindo',
    //             smallImageText: 'komikindo',
    //             instance: true
    //         });

    //         break;
    //     default:
    //         client.clearActivity();
    //         break;
    // }

});

// Log in to RPC with client id
client.login({ clientId });
app.listen(3000, () => console.log('Listening on port 3000!'));
