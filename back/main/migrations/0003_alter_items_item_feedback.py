# Generated by Django 4.1.2 on 2022-11-01 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_items_images_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='item_feedback',
            field=models.PositiveIntegerField(choices=[(-1, 'Negative'), (1, 'Positive')], default=-1),
        ),
    ]
