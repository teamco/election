1. Install nodejs
2. Install MySql (u: root, p: <blank>)
3. cd node (npm install)
4. npm install nodemon (auto reconnect server)
5. create db: 
    echo "create database apolitics_development;" | mysql -uroot
6. create users table:
    sequelize db:migrate
7. run server:
     nodemon --debug
8. open browser: http://localhost:3000

```bash
npm install
npm install --save sequelize-cli mysql
```
