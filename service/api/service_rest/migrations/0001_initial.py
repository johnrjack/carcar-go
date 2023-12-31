# Generated by Django 4.0.3 on 2023-03-10 11:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, null=True, unique=True)),
                ('color', models.CharField(max_length=50)),
                ('year', models.PositiveSmallIntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('employee_number', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='ServiceAppointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=18)),
                ('customer', models.CharField(max_length=100)),
                ('date', models.DateTimeField()),
                ('reason', models.CharField(max_length=300)),
                ('vip', models.BooleanField(default=False)),
                ('completed', models.BooleanField(default=False)),
                ('cancelled', models.BooleanField(default=False)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='techician', to='service_rest.technician')),
            ],
        ),
    ]
