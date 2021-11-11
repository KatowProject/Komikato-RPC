module.exports = async (client, data) => {
    switch (true) {
        case pathname.includes('chapter'):
            const title = data.title.split(':').shift();
            const episode = data.title.split(':').pop().trim();

            client.setActivity({
                details: title,
                state: episode,
                largeImageKey: "750342786825584811_1_",
                largeImageText: 'Komikato',
                smallImageKey: 'mangabat',
                smallImageText: 'mangabat',
                instance: true
            });
            break;

        case pathname.includes('search'):
            const query = data.pathname.split('/')[2];
            client.setActivity({
                details: 'Mangabat',
                state: `Searching for ${query}`,
                largeImageKey: "mangabat",
                largeImageText: 'mangabat',
                smallImageKey: 'magnifier',
                instance: true
            });
            break;

        default:
            client.setActivity({
                state: 'Home',
                details: 'Mangabat',
                largeImageKey: "750342786825584811_1_",
                largeImageText: 'Komikato',
                smallImageKey: 'mangabat',
                smallImageText: 'mangabat',
                instance: true
            });
            break;
    }
}