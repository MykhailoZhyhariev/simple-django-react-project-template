from split_settings.tools import include
import environ
import raven
import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

env = environ.Env(DEBUG=(bool, False), )  # set default values and casting
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))  # reading .env file

include(
    'config/base.py',
    'config/apps.py',
    'config/db.py'
)

try:
    from .local_settings import *  # noqa
except ImportError:
    pass
