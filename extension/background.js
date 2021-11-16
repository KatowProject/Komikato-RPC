async function update(tab) {
    try {
        if (typeof tab !== 'object') return;
        const url = new URL(tab.url);

        let data = {};
        const path = url.pathname;
        switch (true) {
            case path.includes('otakudesu'):
                data.type = 'otakudesu';
                data.path = path;
                data.title = tab.title;
                break;

            case path.includes('komikindo'):
                data.type = 'komikindo';
                data.path = path;
                data.search = url.searchParams.get('s');
                data.title = tab.title;
                break;

            case path.includes('mangabat'):
                data.type = 'mangabat';
                data.path = path;
                data.title = tab.title;
                break;

            case url.origin.includes('komikato'):
                data.type = 'komikato';
                data.tittle = tab.title;
                break;

            default:
                data.type = 'delete';
                break;
        }

        const response = await $.ajax({
            url: 'http://localhost:3000/',
            method: 'POST',
            data: JSON.stringify(data),
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log(error);
        window.location.reload();
    }
};


setInterval(() => {
    /** Get Tabs */
    chrome.windows.getLastFocused({ populate: true }, async function (data) {
        if (typeof data !== 'object') return;

        const findHighlightTabs = data.tabs.find(a => a.highlighted && a.url.includes('komikato'));
        if (!findHighlightTabs) return await update({ url: 'http://ssss.com/', title: '' });

        return await update(findHighlightTabs);
    });
}, 2000);