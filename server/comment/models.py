from django.db import models

# Create your models here.


class CommentModel(models.Model):
    cid=models.CharField(max_length=50, unique=True)
    cdate = models.DateTimeField(auto_now_add=True, blank=False)
    comment = models.CharField(max_length=50)
    user = models.CharField(max_length=50)