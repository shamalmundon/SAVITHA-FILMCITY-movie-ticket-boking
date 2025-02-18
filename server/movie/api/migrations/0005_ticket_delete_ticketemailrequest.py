# Generated by Django 5.1 on 2024-09-01 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_ticketemailrequest'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie_title', models.CharField(max_length=100)),
                ('showtime', models.CharField(max_length=100)),
                ('selected_seats', models.CharField(max_length=200)),
                ('total_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('show_day', models.DateField()),
                ('qr_code_image', models.ImageField(blank=True, null=True, upload_to='qrcodes/')),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.DeleteModel(
            name='TicketEmailRequest',
        ),
    ]
