# Generated by Django 4.0.3 on 2023-03-09 22:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0004_automobilevo_sold'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='sold',
        ),
    ]
