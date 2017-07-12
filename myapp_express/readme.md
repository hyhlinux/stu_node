#### howto

```bash
-➜  stu_node git:(express-generator) express --view=pug myapp_express

   create : myapp_express
   create : myapp_express/package.json
   create : myapp_express/app.js
   create : myapp_express/public
   create : myapp_express/routes
   create : myapp_express/routes/index.js
   create : myapp_express/routes/users.js
   create : myapp_express/views
   create : myapp_express/views/index.pug
   create : myapp_express/views/layout.pug
   create : myapp_express/views/error.pug
   create : myapp_express/bin
   create : myapp_express/bin/www
   create : myapp_express/public/javascripts
   create : myapp_express/public/images
   create : myapp_express/public/stylesheets
   create : myapp_express/public/stylesheets/style.css

   install dependencies:
     $ cd myapp_express && npm install

   run the app:
     $ DEBUG=myapp-express:* npm start
```


#### router params
```bash
➜  ~ curl http://localhost:3000/users/2/books/3 |  python -mjson.tool
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    27  100    27    0     0   3937      0 --:--:-- --:--:-- --:--:--  4500
{
    "bookId": "3",
    "userId": "2"
}
➜  ~

Route path: /user/:userId(\d+)
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}

Route path: /plantae/:genus.:species
Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }

Route path: /flights/:from-:to
Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

➜  stu_node git:(express-generator) ✗ curl http://localhost:3000/users/2-3 |  python -mjson.tool
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    21  100    21    0     0    900      0 --:--:-- --:--:-- --:--:--   913
{
    "from": "2",
    "to": "3"
}
➜  stu_node git:(express-generator) ✗
```
