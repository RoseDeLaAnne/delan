from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from django.utils.translation import gettext_lazy as _

from .models import *


class UserAdmin(UserAdmin):
    search_fields = (
        'username',
        'email',
        'phone_number',
        'last_name',
        'first_name',
    )

    ordering = (
        '-date_joined',
    )

    list_display = (
        'username',
        'email',
        'phone_number',
        'last_name',
        'first_name',
        'is_active',
        'is_staff',
        'is_superuser',
    )

    list_filter = (
        'is_active',
        'is_staff',
        'is_superuser',
    )

    fieldsets = (
        (None, {
            'fields': (
                'avatar',
            ),
        }),
        (None, {
            'fields': (
                'password',
            ),
        }),
        (_('Персональная информация'), {
            'fields': (
                'username',
                'email',
                'phone_number',
                'last_name',
                'first_name',
            ),
        }),
        (_('Права доступа'), {
            'fields': (
                'is_active',
                'is_staff',
                'is_superuser',
            ),
        }),
        (_('Важные даты'), {
            'fields': (
                'last_login',
                'date_joined',
            ),
        }),
    )

    add_fieldsets = (
        (None, {
            'fields': (
                'avatar',
            ),
        }),
        (None, {
            'fields': (
                'password1',
                'password2',
            ),
        }),
        (_('Персональная информация'), {
            'fields': (
                'username',
                'email',
                'phone_number',
                'last_name',
                'first_name',
            ),
        }),
        (_('Права доступа'), {
            'fields': (
                'is_active',
                'is_staff',
                'is_superuser',
            ),
        }),
        (_('Важные даты'), {
            'fields': (
                'date_joined',
            ),
        }),
    )


class ItemsAdmin(admin.ModelAdmin):
    search_fields = (
        'item_name',
        'item_reviews',
        'item_price',
    )

    ordering = (
        '-item_name',
    )

    list_display = (
        'item_name',
        'item_feedback',
        'item_price',
    )

    list_filter = ()

    fieldsets = (
        (None, {
            'fields': (
                'imageUrl',
                'item_name',
            ),
        }),
        (None, {
            'fields': (
                'item_feedback',
                'item_reviews',
            ),
        }),
        (None, {
            'fields': (
                'item_price',
            ),
        }),
        (None, {
            'fields': (
                'item_sizes',
                'item_colors',
            ),
        }),
    )

    add_fieldsets = (
        (None, {
            'fields': (
                'item_name',
            ),
        }),
        (None, {
            'fields': (
                'item_feedback',
                'item_reviews',
            ),
        }),
        (None, {
            'fields': (
                'item_feedback',
                'item_price',
            ),
        }),
        (None, {
            'fields': (
                'item_sizes',
                'item_colors',
            ),
        }),
    )


admin.site.register(User, UserAdmin)
admin.site.register(Items, ItemsAdmin)
admin.site.register(Items_Images)
admin.site.register(Cart)

admin.site.unregister(Group)
