# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'webpack_loader',
    'app'
]

if not env('SENTRY'):
    INSTALLED_APPS.append('raven.contrib.django.raven_compat')

    RAVEN_CONFIG = {
        'dsn': env('SENTRY_DSN'),
        # If you are using git, you can also automatically configure the
        # release based on the git info.
        'release': raven.fetch_git_sha(os.path.dirname(os.pardir)),
    }
