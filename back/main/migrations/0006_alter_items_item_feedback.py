# Generated by Django 4.1.2 on 2022-11-01 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_cart_options_alter_items_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='item_feedback',
            field=models.IntegerField(choices=[(-1, 'Negative'), (1, 'Positive')], default=-1),
        ),
    ]
