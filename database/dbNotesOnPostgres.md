# Heroku Postgres Database Notes #

### DB will not connect ###
You need a localPWD.js in the root of your repo.
If you do not have a copy of localPWD.js, just ask the group.
Please do NOT let localPWD.js get uploaded to github! It has API keys.


### For removing all tables to reset things ###

1. `drop schema public cascade;`
2. `create schema public;`

  * Alternative to above: use `db.sync({force: true})` somewhere in your function, **bad idea in production**
  * http://docs.sequelizejs.com/en/latest/docs/models-definition/#database-synchronization


### Talking to the Database ###
1. Get localPWD.js from Mel

2. Install postgres:
    * `http://postgresapp.com/documentation/cli-tools.html`
    * `http://postgresapp.com/`


3. Once you have installed psql and edited your path so that you can use the CLI
   * `heroku pg:psql --app tito-test`


### Misc postgres commands ###

 * list all tables:
   * `\dt;`

   * same as this long version
     * `select table_schema, table_name from information_schema.tables where table_schema = 'public';`


 * show a table's columns:
   `\d <table name>;`

 * show contents of a table
     `SELECT * from <table name>;`


 * demo user insert:
      ` INSERT INTO "Users" VALUES (DEFAULT, '', '');`
 * quit
    * `\quit`

 * halp!
     * `\help`

