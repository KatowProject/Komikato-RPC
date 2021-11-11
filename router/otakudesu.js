module.exports = async (client, data) => {
    const pathname = data.path;

    switch (true) {
        case pathname.includes('eps'):
            const title = data.title.split('Episode').shift();
            const episode = data.title.split('Episode').pop().trim();

            client.setActivity({
                state: `Episode ${episode}`,
                details: title,
                largeImageKey: "750342786825584811_1_",
                largeImageText: 'Komikato',
                smallImageKey: 'otakudesu',
                smallImageText: 'otakudesu',
                instance: true
            });
            break;

        case pathname.includes('search'):
            const query = data.path.split('/').pop();
            client.setActivity({
                details: 'Otakudesu',
                state: `Searching for ${query}`,
                largeImageKey: "otakudesu",
                largeImageText: 'otakudesu',
                smallImageKey: 'magnifier',
                smallImageText: 'magnifier',
                instance: true
            });
            break;


        default:
            client.setActivity({
                state: 'Home',
                details: 'Otakudesu',
                largeImageKey: "750342786825584811_1_",
                largeImageText: 'Komikato',
                smallImageKey: 'otakudesu',
                smallImageText: 'otakudesu',
                instance: true
            });
            break;
    }
}