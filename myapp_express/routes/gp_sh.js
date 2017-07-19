/**
 * Created by apple on 2017/7/19.
 */

var express = require('express');
var request = require('request');
const cheerio = require('cheerio');
var router = express.Router();


function initialRequest (opts) {
    // sometimes the first result page is a cluster of subsections,
    // need to skip to the full results page
    function skipClusterPage (html) {
        const match = html.match(/href="\/store\/apps\/collection\/search_collection_more_results_cluster?(.*?)"/);
        if (match) {
            const innerUrl = 'https://play.google.com/' + match[0].split(/"/)[1];
            return request({
                url: innerUrl,
                proxy: opts.proxy
            }, opts.throttle);
        }
        return html;
    }

    const url = `https://play.google.com/store/search?c=apps&q=${opts.term}&hl=${opts.lang}&gl=${opts.country}&price=${opts.price}`;
    console.log('url:', url);
    var opts_get = {
        method: 'GET',
        num:opts.num,
        url: url,
        gzip: true,
        timeout: 5000,
        proxy: opts.proxy,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
        }
    };
    request(opts_get, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           processAndRecur(body, opts, []);
        } else {
            console.error(error);
        }
    });

    return opts;
}

function processAndRecur (html, opts, savedApps, clp) {
    const nextToken = getNextToken(html);
    console.log('nextToken:', nextToken)
    clp = clp || getClp(html);
    console.log('clp:', clp);

    const $ = cheerio.load(html);
}

function getNextToken (html) {
    // extract the token for the next page request
    // for the record, I hate regexps
    // const s = html.match(/\\42(GAE.+?)\\42/);
    const s = html.match(/\\x22-p6(.*?):S:(.*?)\\x22/g);
    console.log('getNextToken:', s);
    if (!s) {
        return undefined;
    }
    return s[0].replace(/\\\\u003d/g, '=').replace(/\\x22/g, '');
}

function getClp (html) {
    // Try to find clp from "next page" html elem.
    let match = html.match(/\?clp=(.*?)">/);
    // ... if we don't have it, we're probably on innerPage;
    // try to parse it from search_collection_more_results_cluster instead
    // var curl='https://play.google.com/store/apps/collection/search_collection_more_results_cluster?clp\x3dggENCgVwYW5kYRABGgIIAA%3D%3D:S:ANO1ljKV8KM';
    if (!match) match = html.match(/\?clp\\x3d(.*?)';/);
    return match && match[1].replace(/%3D/g, '=');
}

function processAndRecur (html, opts, savedApps, clp) {
    const nextToken = getNextToken(html);
    console.log('nextToken:', nextToken)
    clp = clp || getClp(html);
    console.log('clp:', clp);

    var $ = cheerio.load(html);
    if ($) {
        $('.card').each(function (i) {
            // var a = $(this).find('.title');
            // var adeveloper = $(this).find('.subtitle-container a');
            // var img = $(this).find('.cover-image');
            var detail_url = $(this).find('.card-click-target').attr("href");
            // var review_stars = $(this).find('.tiny-star').attr('aria-label');
            var tmp = {
                detail_url:detail_url
            }
            savedApps.push(tmp);
            // console.log(i,detail_url);
        });
    }
    console.log("len:", savedApps.length);
    if (savedApps.length > opts.num) {
        savedApps.forEach(function (item) {
            console.log(item.detail_url);
        });
    }
    checkFinished(opts, savedApps, nextToken, clp);
    return opts;
}

function checkFinished (opts, savedApps, nextToken, clp) {
    console.log('savedApps.length vs opts.num', savedApps.length, opts.num);
    if (savedApps.length >= opts.num || !nextToken) {
        console.log('savedApps.length >= opts.num', savedApps.length, opts.num);
        return savedApps.slice(0, opts.num);
    }
    console.log('savedApps.length < opts.num', savedApps.length, opts.num);
    const requestOptions = {
        url: 'https://play.google.com/store/apps/collection/search_results_cluster_apps',
        method: 'POST',
        form: {
            num: savedApps.length === 49 ? 0 : 48, // confirm if always 48 works
            start: savedApps.length - 49,
            pagTok: nextToken,
            clp:clp,
            pagtt: 3,
            hl: opts.lang,
            gl: opts.country
        },
        proxy: opts.proxy
    };
    console.log("Post requestOptions:", requestOptions);
    request(requestOptions, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            processAndRecur(body, opts, savedApps, clp);
        } else {
            console.error(error);
        }
    });

    return;
}

function search(opts) {
    opts = {
        term: encodeURIComponent(opts.term),
        lang: opts.lang || 'en',
        country: opts.country || 'us',
        num: opts.num || 20,
        fullDetail: opts.fullDetail,
        price: opts.price ? getPriceGoogleValue(opts.price) : 0,
        throttle: opts.throttle,
        proxy: opts.proxy
    };


    return initialRequest(opts);
}
router.get('/sh/:q/:num', function(req, res){
    let data = search({
        term: req.params['q'],
        proxy:"http://192.168.6.1:8118",
        num: req.params['num']
    });
    res.json(data);
});


router.post('/post', function (req, res) {
    console.log('req',req.body);
    res.json(req.body);
});

module.exports = router;