# Generated by Django 3.1.5 on 2021-04-12 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subscription',
            name='country',
        ),
        migrations.RemoveField(
            model_name='subscription',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='subscription',
            name='newsletter_permission',
        ),
        migrations.AddField(
            model_name='subscription',
            name='certificate',
            field=models.BooleanField(default=False, verbose_name='Certificate'),
        ),
        migrations.AddField(
            model_name='subscription',
            name='occupation',
            field=models.CharField(default=True, max_length=150, verbose_name='Occupation Area'),
            preserve_default=False,
        ),
    ]
