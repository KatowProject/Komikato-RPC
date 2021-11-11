function update(tab) {
    if (typeof tab !== 'object') return;
    let data = null;
    const url = new URL(tab.url);

    switch (true) {
        case url.origin.includes('//newtab'):
            data = {
                status: 'completed',
                action: 'set',
                details: url.hostname || tab.url,
                smallText: tab.url,
                largeText: tab.title,
            }
            break;

        case url.origin.includes('http'):
            data = {
                status: tab.status,
                action: "set",
                url: tab.url,
                details: url.hostname || tab.url,
                smallText: tab.url,
                largeText: tab.title ? tab.title : null
            }
            break;

        default:
            data = {
                action: 'clear',
            };
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