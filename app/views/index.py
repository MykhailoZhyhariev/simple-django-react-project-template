from django.views.generic import View
from django.shortcuts import render
from django.conf import settings


class IndexView(View):
    def get(self, request):
        context = {
            'debug': settings.DEBUG
        }

        return render(request, 'index.html', context)
