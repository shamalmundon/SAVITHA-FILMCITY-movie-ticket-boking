from django.db import models

# Create your models here.
class RunningMovie(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField()
    genre = models.CharField(max_length=100)
    description = models.TextField()
    director = models.CharField(max_length=100)
    cast = models.TextField()
    poster_url = models.URLField(max_length=255)
    
    def __str__(self):
        return self.title

class UpcomingMovie(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField()
    genre = models.CharField(max_length=100)
    description = models.TextField()
    director = models.CharField(max_length=100)
    cast = models.TextField()
    poster_url = models.URLField(max_length=255)
    
    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=255)
    mobile = models.CharField(max_length=15)
    message = models.TextField(max_length=500)

    def __str__(self):
        return f"{self.name} - {self.email}"


class Ticket(models.Model):
    movie_title = models.CharField(max_length=100)
    showtime = models.CharField(max_length=100)
    selected_seats = models.CharField(max_length=200)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    show_day = models.DateField()
    qr_code_image = models.ImageField(upload_to='qrcodes/', blank=True, null=True)
    email = models.EmailField()

    def __str__(self):
        return f"{self.movie_title} - {self.email}"