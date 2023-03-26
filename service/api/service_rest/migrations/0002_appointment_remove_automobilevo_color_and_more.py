# Generated by Django 4.0.3 on 2023-03-25 23:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('customer_name', models.CharField(max_length=100)),
                ('date', models.DateTimeField(null=True)),
                ('reason', models.CharField(max_length=200)),
                ('vip', models.BooleanField(blank=True, default=False, null=True)),
                ('finished', models.BooleanField(default=False, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='color',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='import_href',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='year',
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.PositiveSmallIntegerField(unique=True),
        ),
        migrations.DeleteModel(
            name='ServiceAppointment',
        ),
        migrations.AddField(
            model_name='appointment',
            name='technician',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointment', to='service_rest.technician'),
        ),
    ]
