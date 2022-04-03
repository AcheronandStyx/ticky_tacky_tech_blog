const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers"); // bring in helper functions

const app = express();
const PORT = process.env.PORT || 3001;

const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "????",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exphbs.create({ helpers }); // pass the helper functions into the instance of handlebars

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening at http://localhost:${PORT}`)
  );
});

/*
For dates in a post we can reference the created_at value of the entry right?

All tables not comming up when I start the server. Why? Becasue I haven't seeded?
*/
