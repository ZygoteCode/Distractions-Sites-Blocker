// ==UserScript==
// @name Distractions Sites Blocker
// @description Blocks all distraction websites
// @match http*://*.tiktok.com
// @match http*://*.tinder.com
// @match http*://*.snapchat.com
// @match http*://*.facebook.com
// @match http*://*.instagram.com
// @match http*://*.vk.com
// @match http*://*.9gag.com
// @match http*://*.tumblr.com
// @match http*://*.chat.google.com
// @match http*://*.zoom.us
// @match http*://*.mastodon.it
// @match http*://*.joinmastodon.org
// @match http*://*.mastodon.social
// @match http*://*.signal.org
// @match http*://*.max.com
// @match http*://*.hbomax.com
// @match http*://*.spotify.com
// @match http*://*.playstation.com
// @match http*://*.primevideo.com
// @match http*://*.ebay.it
// @match http*://*.disneyplus.com
// @match http*://*.disney.it
// @match http*://*.xbox.com
// @match http*://*.bereal.com
// @match http*://*.netflix.com
// @match http*://*.netflix.it
// @match http*://*.skype.com
// @match http*://*.steamcommunity.com
// @match http*://*.steampowered.com
// @match http*://*.steam.com
// @match http*://*.hulu.com
// @match http*://*.battle.net
// @match http*://*.blizzard.com
// @match http*://*.pinterest.com
// @match http*://*.t.me
// @match http*://*.telegram.org
// @match http*://*.dailymotion.com
// @match http*://*.leagueoflegends.com
// @match http*://*.riotgames.com
// @match http*://*.reddit.com
// @match http*://*.twitch.tv
// @match http*://*.fortnite.com
// @match http*://*.epicgames.com
// @match http*://*.twitter.com
// @match http*://*.roblox.com
// @match http*://*.minecraft.net
// @match http*://*.mojang.com
// @match http*://*.youtube.com
// @match http*://*.youtu.be
// @match http*://*.imgur.com
// @match http*://*.streamingcommunity.*
// @match http*://*.caischia.*
// @match http*://*.caischia.it
// @match http*://*.azarlive.com
// @match http*://*.streamingcommunity.marketing
// @match http*://*.streamingcommunity.miami
// @match http*://*.pornhub.com
// @match http*://*.temu.com
// @match http*://*.omegle.cc
// @match http*://*.chatroulette.com
// @match http*://*.emeraldchat.com
// @match http*://*.elitepvpers.com
// @match http*://*.elscheat.com
// @match http*://*.monkey.app
// @match http*://*.coomeet.com
// @match http*://*.omegle.com
// @match http*://*.ome.tv
// @match http*://*.quora.com
// @match http*://*.trustpilot.com
// @match http*://*.linkedin.com
// @match http*://*.tantaly.com
// @match http*://*.tantaly.de
// @match http*://*.realsexdoll.it
// @match http*://*.thehandy.com
// @match http*://*.elsrift.to
// @match http*://*.gameforge.com
// @match http*://*.elsword.gameforge.com
// @match http*://*.gmail.com
// @match http*://*.mail.google.com
// @match http*://*.drive.google.com
// @match http*://*.chatvisionz.com
// @match http*://*.soundcloud.com
// @match http*://*.linktr.ee
// @match http*://*.skool.com
// @match http*://*.trapani.it
// @match http*://*.diocesi.trapani.it
// @match http*://*.politichegiovanili.gov.it
// @match http*://*.isdavincitorre.edu.it
// @match http*://*.isdavincitorre.eu
// @match http*://*.filecr.com
// @match http*://*.moscarossa.biz
// @match http*://*.indeed.com
// @match http*://*.weights.gg
// @match http*://*.udemy.com

// @run-at document-start
// @version 1.0
// ==/UserScript==

var current = window.location.href;
window.history.back();

if (window.location.href == current)
{
    window.close();

    if (window.location.href == current)
    {
        window.location.href = "about://newtab";
    }
}