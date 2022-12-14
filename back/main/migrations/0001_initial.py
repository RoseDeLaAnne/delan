# Generated by Django 4.1.2 on 2022-11-01 12:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='avatars', verbose_name='Аватар')),
                ('username', models.CharField(max_length=255, unique=True, verbose_name='Имя пользователя')),
                ('email', models.EmailField(blank=True, max_length=254, null=True, unique=True, verbose_name='Адрес электронной почты')),
                ('phone_number', models.CharField(blank=True, max_length=18, null=True, unique=True, verbose_name='Номер телефона')),
                ('last_name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Фамилия')),
                ('first_name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Имя')),
                ('is_active', models.BooleanField(default=True, help_text='Отметьте, если пользователь должен считаться активным. Уберите эту отметку вместо удаления учётной записи.', verbose_name='Активный')),
                ('is_staff', models.BooleanField(default=False, help_text='Отметьте, если пользователь может входить в административную часть сайта.', verbose_name='Статус персонала')),
                ('is_superuser', models.BooleanField(default=False, help_text='Указывает, что пользователь имеет все права без явного их назначения.', verbose_name='Статус суперпользователя')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата регистрации')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'Пользователя',
                'verbose_name_plural': 'Пользователи',
            },
        ),
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_name', models.CharField(blank=True, max_length=255, null=True)),
                ('item_feedback', models.BooleanField(blank=True, null=True)),
                ('items_reviews', models.PositiveIntegerField(default=0)),
                ('item_price', models.PositiveIntegerField(default=0)),
                ('item_sizes', models.JSONField(blank=True, null=True)),
                ('item_colors', models.JSONField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Одежду',
                'verbose_name_plural': 'Одежды',
            },
        ),
        migrations.CreateModel(
            name='Items_Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='items_images')),
                ('items', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.items')),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('items', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.items')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Корзину',
                'verbose_name_plural': 'Корзины',
            },
        ),
    ]
