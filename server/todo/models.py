from django.db import models

from comment.models import CommentModel

# Create your models here.

class Todo(models.Model):
    todoid=models.CharField(max_length=50, unique=True)
    comment=models.ForeignKey(CommentModel,on_delete=models.CASCADE)
    todo=models.CharField(max_length=50)

    # def create_todo(self,todos):
    #     todo=self.create