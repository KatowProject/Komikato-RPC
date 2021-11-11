function update(tab) {
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

        default:
            data.type = 'komikato';
            data.tittle = tab.title;
            break;
    }

    $.post({
        traditional: true,
        url: 'http://localhost:3000/',
        contentType: 'application/json',
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (response) { console.log(response); }
    });
};


setInterval(async () => {
    /** Get Tabs */
    chrome.windows.getLastFocused({ populate: true }, function (data) {
        if (typeof data !== 'object') return;

        const findHighlightTabs = data.tabs.find(a => a.highlighted && a.url.includes('komikato'));
        if (!findHighlightTabs) return;

        return update(findHighlightTabs);
    });

    /** Reload Web */
    window.location.reload();
}, 5000);