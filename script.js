function openAppWithFallback(intentUrl, fallbackUrl) {
    const start = Date.now();
    let clicked = false;
    
    window.location.href = intentUrl;

    setTimeout(function() {
        if (!clicked && Date.now() - start < 2000) {
            window.location.href = fallbackUrl;
        }
    }, 2000);
    
    window.addEventListener('focus', function() {
        clicked = true;
    });
}

function handleBubbleClick(appLink, storeLink, fallbackUrl, packageName) {
    const storeLinkEncoded = encodeURI(storeLink);
    const parts = appLink.split('://');
    const scheme = parts.shift();
    const data = parts.join('://');
    const appsflyerClickTs = Date.now();
    const referrer = new URL(storeLink).searchParams.get('referrer');
    const intentUrl = `intent://${data}#Intent;scheme=${scheme};package=${packageName};S.browser_fallback_url=${storeLinkEncoded};S.market_referrer=${referrer};l.appsflyer_click_ts=${appsflyerClickTs};end`;
    
    openAppWithFallback(intentUrl, fallbackUrl);
}

document.querySelector('#floatingBubble1').addEventListener('click', function() {
    const appLink = 'bigolive://profile?uid=560092345&af_ad=official&af_adset=petitlion18&af_deeplink=true&af_dp=bigolive%3A%2F%2Fprofile%3Fuid%3D560092345&campaign=profile_liveicon&is_retargeting=true&media_source=website';
    const storeLink = 'market://details?id=sg.bigo.live&referrer=af_tranid%3DQedyIX_LhlAlPtm6BzErFA%26af_dp%3Dbigolive%253A%252F%252Fprofile%253Fuid%253D560092345%26c%3Dprofile_liveicon%26af_ad%3Dofficial%26pid%3Dwebsite%26af_adset%3Dpetitlion18';
    const fallbackUrl = 'https://bigo.tv/fr/user/petilion18';
    handleBubbleClick(appLink, storeLink, fallbackUrl, 'sg.bigo.live');
});

document.getElementById("floatingBubble2").addEventListener("click", function() {
    const appLink = 'bigolive://livevideoshow?roomid=7015338174445824037&uid=560092345&visitor=1&code=6893554100&act=act39011&af_deeplink=true&af_dp=bigolive%3A%2F%2Flivevideoshow%3Froomid%3D7015338174445824037%26uid%3D560092345%26visitor%3D1%26code%3D6893554100%26act%3Dact39011&campaign=bigolive%3A%2F%2Flivevideoshow%3Froomid%3D7015338174445824037%26uid%3D560092345%26visitor%3D1%26code%3D6893554100&is_retargeting=true&media_source=SBLX';
    const storeLink = 'market://details?id=sg.bigo.live&referrer=af_tranid%3DxwZwLE7nEHsXobSZHHOJcw%26af_dp%3Dbigolive%253A%252F%252Flivevideoshow%253Froomid%253D7015338174445824037%2526uid%253D560092345%2526visitor%253D1%2526code%253D6893554100%2526act%253Dact39011%26c%3Dbigolive%3A%2F%2Flivevideoshow%3Froomid%3D7015338174445824037%26uid%3D560092345%26visitor%3D1%26code%3D6893554100%26pid%3DSBLX';
    const fallbackUrl = 'https://bigo.tv/fr/petilion18';
    handleBubbleClick(appLink, storeLink, fallbackUrl, 'sg.bigo.live');
});
