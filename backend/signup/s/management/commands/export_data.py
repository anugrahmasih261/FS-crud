from django.core.management.base import BaseCommand
from s.models import Signup
import csv

class Command(BaseCommand):
    help = 'Export data to a CSV file'

    def handle(self, *args, **kwargs):
        data = Signup.objects.all()
        with open('data.csv', 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(['id', 'username', 'email', 'password'])
            for row in data:
                writer.writerow([row.id, row.username, row.email, row.password])
        self.stdout.write(self.style.SUCCESS('Data exported successfully!'))
