# Generated by Django 3.0.4 on 2020-03-26 09:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('comment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TodoModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todoid', models.CharField(max_length=50, unique=True)),
                ('todo', models.CharField(max_length=50)),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='comment.CommentModel')),
            ],
        ),
    ]
