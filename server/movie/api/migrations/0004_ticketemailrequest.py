# Generated by Django 5.1 on 2024-08-31 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_runningmovie'),
    ]

    operations = [
        migrations.CreateModel(
            name='TicketEmailRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('movie_title', models.CharField(max_length=255)),
                ('showtime', models.CharField(max_length=255)),
                ('seats', models.JSONField()),
                ('total_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('showday', models.DateField()),
            ],
        ),
    ]
