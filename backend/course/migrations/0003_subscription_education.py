# Generated by Django 3.1.5 on 2021-04-16 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0002_auto_20210412_1850'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscription',
            name='education',
            field=models.CharField(default='Test', max_length=150, verbose_name='Education'),
            preserve_default=False,
        ),
    ]