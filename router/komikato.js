module.exports = async (client, data) => {
    client.setActivity({
        details: 'Komikato',
        state: data.title,
        largeImageKey: "750342786825584811_1_",
        largeImageText: "Komikato",
        instance: true
    });
}