# Generated by Django 4.1.2 on 2022-11-01 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items_images',
            name='image',
            field=models.ImageField(upload_to='items'),
        ),
    ]
