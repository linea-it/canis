from rest_framework import viewsets

from rest_framework.decorators import action
from rest_framework.response import Response

from course.models import Subscription
from course.serializers import SubscriptionSerializer

from django.http import HttpResponse
import csv


class SubscriptionViewSet(viewsets.ModelViewSet):
    # Disable authentication and permission for this view
    authentication_classes = []
    permission_classes = []

    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    filter_fields = ('id', 'name', 'email', 'institute', 'education',
                     'position', 'occupation', 'certificate', 'creation_date',)

    search_fields = ('id', 'name', 'email', 'institute',
                     'position', 'education', 'occupation',)
    ordering_fields = ('id', 'name', 'email', 'institute', 'education',
                       'position', 'occupation', 'certificate', 'creation_date',)
    ordering = ('id',)

    # Export participants to CSV:
    @action(detail=False, methods=['GET'])
    def to_csv(self, request, pk=None):
        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="subscriptions.csv"'

        writer = csv.writer(response)

        writer.writerow([
            'id',
            'name',
            'email',
            'institute',
            'education',
            'position',
            'occupation',
            'certificate',
            'creation_date',
        ])

        subscriptions = Subscription.objects.all().filter(is_active=True).values_list(
            'id',
            'name',
            'email',
            'institute',
            'education',
            'position',
            'occupation',
            'certificate',
            'creation_date',
        )
        for subscription in subscriptions:
            writer.writerow(subscription)

        return response
