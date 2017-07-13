# stu_node
express 框架使用

# gp 爬虫play.google
#### search 发起多次请求
```bash
params: qq
url: https://play.google.com/store/search?c=apps&q=qq&hl=en&gl=us&price=0
GET /gp/search/qq/100 200 36.147 ms - 22
getNextToken: [ '\\x22-p6BnQMCCDE\\\\u003d:S:ANO1ljJ4Cw8\\x22' ]
nextToken: -p6BnQMCCDE=:S:ANO1ljJ4Cw8
clp: ggEICgJxcRoCCAA=:S:ANO1ljL3sk8
getNextToken: [ '\\x22-p6BnQMCCGI\\\\u003d:S:ANO1ljJYYFs\\x22' ]
nextToken: -p6BnQMCCGI=:S:ANO1ljJYYFs
clp: ggEICgJxcRoCCAA=:S:ANO1ljL3sk8
getNextToken: [ '\\x22-p6BnQMDCJMB:S:ANO1ljLvbuA\\x22' ]
nextToken: -p6BnQMDCJMB:S:ANO1ljLvbuA
clp: ggEICgJxcRoCCAA=:S:ANO1ljL3sk8
```

#### detail 获取当地国家的数据。
```bash
const qs = queryString.stringify({
      id: opts.appId,
      hl: opts.lang,
      gl: opts.country
    });
```
