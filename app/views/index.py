from django.conf import settings
from django.shortcuts import render
from django.views.generic import View


class IndexView(View):
    def get(self, request):
        context = {
            'debug': settings.DEBUG
        }

        return render(request, 'index.html', context)
