# Get update project from repo (master branch)
pull:
	git checkout master
	git pull

# Make new virtual environment
venv:
	python3 -m venv ./venv

# Install all python dependencies
pip:
	venv/bin/pip install -r requirements.txt

migrations:
	venv/bin/python manage.py makemigrations --no-input

# DB migrate
migrate:
	venv/bin/python manage.py migrate

# Update environment state
env:
	cp example.env .env

# Update project from repo, check new dependencies and DB migrations
update:
	pull pip migrate

# Run develop server
dev:
	venv/bin/python manage.py runserver

# Collect static
static:
	venv/bin/python manage.py collectstatic

# Install NPM dependencies
npm:
	npm install

# Deploy project on server (update, make venv, install all dependencies, collect static)
deploy:
	pull venv pip env migrate static
