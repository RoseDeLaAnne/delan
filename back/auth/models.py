from django.db import models

from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    class Meta:
        verbose_name = 'Пользователя'
        verbose_name_plural = 'Пользователи'

    avatar = models.ImageField(verbose_name=_(
        'Аватар'), upload_to='avatars', blank=True, null=True)

    username = models.CharField(verbose_name=_(
        'Имя пользователя'), max_length=255, unique=True)
    email = models.EmailField(verbose_name=_(
        'Адрес электронной почты'), unique=True, blank=True, null=True)
    phone_number = models.CharField(verbose_name=_(
        'Номер телефона'), max_length=18, unique=True, blank=True, null=True)

    last_name = models.CharField(verbose_name=_(
        'Фамилия'), max_length=255, blank=True, null=True)
    first_name = models.CharField(verbose_name=_(
        'Имя'), max_length=255, blank=True, null=True)

    is_active = models.BooleanField(verbose_name=_('Активный'), help_text=_(
        'Отметьте, если пользователь должен считаться активным. Уберите эту отметку вместо удаления учётной записи.'), default=True)
    is_staff = models.BooleanField(verbose_name=_('Статус персонала'), help_text=_(
        'Отметьте, если пользователь может входить в административную часть сайта.'), default=False)
    is_superuser = models.BooleanField(verbose_name=_('Статус суперпользователя'), help_text=_(
        'Указывает, что пользователь имеет все права без явного их назначения.'), default=False)

    date_joined = models.DateTimeField(verbose_name=_(
        'Дата регистрации'), default=timezone.now)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.username


class Items(models.Model):
    class Meta:
        verbose_name = 'Одежду'
        verbose_name_plural = 'Одежды'

    item_name = models.CharField(max_length=255, blank=True, null=True)

    item_feedback = models.BooleanField(blank=True, null=True)
    items_reviews = models.PositiveIntegerField(default=0)

    item_price = models.PositiveIntegerField(default=0)

    item_sizes = models.JSONField(null=True, blank=True)
    item_colors = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.item_name


class Items_Images(models.Model):
    items = models.ForeignKey(Items, on_delete=models.CASCADE)

    image = models.ImageField(upload_to='items_images')

    def __str__(self):
        return self.items.item_name


class Cart(models.Model):
    class Meta:
        verbose_name = 'Корзину'
        verbose_name_plural = 'Корзины'

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    items = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
