module.exports = async (client, data) => {
    const pathname = data.path;
    switch (true) {
        case pathname.includes('chapter'):
            const title = data.title.split('Chapter').shift();
            const chapter = data.title.split('Chapter').pop().trim();

            client.setActivity({
                state: `Chapter ${chapter}`,
                details: title,
                largeImageKey: "750342786825584811_1_",
                largeImageText: 'Komikato',
                smallImageKey: 'komikindo',
                smallImageText: 'komikindo',
                instance: true
            });
            break;

        case pathname.includes('search'):
            client.setActivity({
                details: 'Komikindo',
                state: `Searching for ${data.search}`,
                largeImageKey: "komikindo",
                largeImageText: 'Komikindo',
                smallImageKey: 'magnifier',
            });
            break;

        default:
            client.setActivity({
                state: 'Home',
                details: 'Komikindo',
                largeImageKey: "750342786825584811_1_",
                largeImageText: 'Komikato',
                smallImageKey: 'komikindo',
                smallImageText: 'komikindo',
                instance: true
            });
            break;
    }
}