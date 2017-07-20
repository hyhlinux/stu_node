# coding:utf-8

import requests
import re
from lxml import etree

link = "https://play.google.com/store/apps/collection/search_results_cluster_apps?authuser=0 "
proxies = {"http": "http://192.168.6.1:8118"}
datalist = [
    {
        "num": [0],
        "start": [0],
        # "pagTok": '-p6BnQMCCDE=:S:ANO1ljJ4Cw8',
        # "clp": 'ggEICgJxcRoCCAA=:S:ANO1ljL3sk8',
        "pagtt": 3,
        "hl": 'en',
        "gl": 'us'
    },
    {
        "num": [48],
        "start": [49],
        # "pagTok": '-p6BnQMCCGI=:S:ANO1ljJYYFs',
        # "clp": 'ggEICgJxcRoCCAA=:S:ANO1ljL3sk8',
        "pagtt": 3,
        "hl": 'en',
        "gl": 'us'
    },
    {
        "num": [48],
        "start": [98],
        # "pagTok": '-p6BnQMDCJMB:S:ANO1ljLvbuA',
        # "clp": 'ggEICgJxcRoCCAA=:S:ANO1ljL3sk8',
        "pagtt": 3,
        "hl": 'en',
        "gl": 'us'
    },
    {
        "num": [48],
        "start": [147],
        # "pagTok": '-p6BnQMDCMQB:S:ANO1ljIeRbo',
        # "clp": 'ggEICgJxcRoCCAA=:S:ANO1ljL3sk8',
        "pagtt": 3,
        "hl": 'en',
        "gl": 'us'
    },
]


def getToken(html=None):
    token_js = html.xpath('//div/script')[-1].text
    token = re.findall(r"\\x22(-p6.*?:S:.*?)\\x22", token_js)[0]
    token = ''.join(token).replace(r"\\u003d", "=")
    # print("token:", token)
    if not token:
        return None
    return token

ret = []
clp = ""


def getFirstPageRet():
    global clp
    url = "https://play.google.com/store/search?c=apps&q=qq&hl=en&gl=us&price=0"
    resp = requests.get(url)
    html = etree.HTML(resp.content)
    with open("./search_00.html", "w") as f:
        f.write(resp.content)
    ret00 = html.xpath('//*[contains(@class, "card-content")]/a/@href')
    ret.extend(ret00)
    print("00Get len", len(ret00))
    clp = html.xpath('//*[contains(@class, "single-title-link")]/a/@href')[
        0].split("clp=")[1].replace("%3D", "=")
    print('New-clp:{} old:{}'.format(clp, datalist[0].get('clp')))
    token = getToken(html)
    print("00NextToken:", token)
    return token


def main():
    global ret
    token = getFirstPageRet()
    for data in datalist:
        # token
        if all([clp, token]):
            data['clp'] = clp
            # print("old:{} new:{}".format(data['clp'], clp))
            data['pagTok'] = token
            # print("old:{} new:{}".format(data['pagTok'], token))
        else:
            print('err:', clp, token)
        resp = requests.post(link, data, proxies=proxies)
        print('resp', resp, 'data', data)
        if resp.status_code != 200:
            continue
        html = etree.HTML(resp.content)
        token = getToken(html)
        print("NextToken:{} old:{}".format(token, data.get('pagTok')))
        ret.extend(html.xpath('//*[contains(@class, "card-content")]/a/@href'))
        with open("./gp_search_more_{}_{}.html".format(data.get('start', 0), data.get('num', 0)), "w") as f:
            f.write(resp.content)

    print(len(ret), len(set(ret)))
    for i in range(len(ret)):
        if ret[i].startswith("/store/apps/details?id="):
            print("{}:{}".format(i + 1, ret[i]
                                 [len("/store/apps/details?id="):]))

if __name__ == '__main__':
    main()
