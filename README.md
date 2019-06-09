Simple Django+React.js project template
-----------------------------

Project use SQlite3 database for development and PostgreSQL database in production.

Setting the project
-------------------

1) Create the virtual environment

`python3 -m venv ./venv` or `make venv`

2) Activate the virtual environment

`source venv/bin/activate`

3) Install all python dependencies

`pip install -r requirements.txt` or `make pip`

4) Install node modules

`npm install`

5) Create environment variables:

`cp example.env .env` or `make env`

6) Apply DB migrate

`python manage.py migrate` or `make migrate`

7) Starting the project

`npm start`


Project tree
------------

```
├── Makefile                      # Global projects shortcuts
├── README.md                     # You are reading this file now
├── app
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── frontend                  # Contains all RAW frontend files.
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   └── templates             # Contains all HTML templates
│   │       ├── index.html
│   │       ├── layout.html       # The main template that contains all markup. All other pages are inheriting this template.
│   │       └── partials          # Contains some small HTML templates
│   │           ├── footer.html
│   │           └── header.html
│   ├── migrations
│   ├── models                    # Contains all app models
│   ├── static                    # Contains BUILDED static files
│   ├── tests.py
│   ├── urls.py                   # App urls
│   └── views                     # Contains all app views
├── backend
│   ├── __init__.py
│   ├── config                   
│   │   ├── __init__.py
│   │   ├── apps.py               # Apps connected to project
│   │   ├── base.py               # Base project settings
│   │   └── db.py                 # DB settings
│   ├── settings.py               # Project settings
│   ├── urls.py                   # Global project urls
│   └── wsgi.py
├── example.env                   # Example environment file
├── gulpfile.babel.js             # Gulp config. Contains build scripts for fonts and images and some commands
├── manage.py
├── package.json                  # NPM requirements and shortcuts
├── requirements.txt              # Python requirements
├── server.js                     # Webpack Hot Module Reload (HMR) server script
├── webpack.base.config.js        # Webpack BASE config. Contains all basic webpack settings. All other configs are inheriting it.
├── webpack.local.config.js       # Webpack DEVELOPMENT config. Contains webpack settings for development  
└── webpack.prod.config.js        # Webpack PRODUCTION config. Contains webpack settings for production
```


NPM shortcuts:
--------------

1) Building frontend for production

`npm run build`

2) Starting dev server only (without watching frontend)

`npm run server`

3) Starting dev server with watching images and fonts and Webpack Hot Module Reload

`npm start`


Makefile shortcuts:
-------------------

1) Get update project from repo (master branch)

`make pull`

2) Make new virtual environment

`make venv`

3) Install all python dependencies

`make pip`

4) Collect DB migrations

`make migrations`

5) DB migrate

`make migrate`

6) Update environment state

`make env`

7) Update project from repo, check new dependencies and DB migrations

`make update`

8) Run develop server

`make dev`

9) Collect static

`make static`

10) Install NPM dependencies

`make npm`

11) Deploy project on server (update, make venv, install all dependencies, collect static)

`make deploy`

Example environment file
------------------------

Environment file contains attributes:

- `ENVIRONMENT`. DB setting. Can be `dev` and `master`. `dev` use sqlite3 database. `master` use PostgreSQL database.

- `SECRET_KEY`. Project secret key. Use different keys for every new project!

- `DEBUG`. Switch on/off develop mode. Use `yes` in develop mode and `no` in production.

- `DB_NAME`. PostgreSQL database name.

- `DB_PASS`. PostgreSQL database password.

- `DB_USER`. PostgreSQL database user.

- `DB_HOST`. PostgreSQL database host.

- `DB_PORT`. PostgreSQL database port.

- `SENTRY`. Switch on/off sentry. Use `true` to switch on sentry in project.

- `SENTRY_DSN`. Sentry DSN.


Example environment file:

```
ENVIRONMENT=dev
SECRET_KEY=some_strong_password
DEBUG=yes
DB_NAME=name
DB_PASS=pass
DB_USER=user
DB_HOST=localhost
DB_PORT=5432
SENTRY=false
SENTRY_DSN=dsn_of_your_cool_project
```


Flake 8 setup up
----------------

To install Flake 8 pre-commit hook:

1) Install Flake 8 pre-commit hook;

```
flake8 --install-hook git
```

2) Setup up hook;

```
git config --bool flake8.strict true
```
