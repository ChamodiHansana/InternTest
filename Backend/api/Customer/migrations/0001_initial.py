# Generated by Django 3.2.4 on 2021-06-30 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customers',
            fields=[
                ('CustomerId', models.AutoField(primary_key=True, serialize=False)),
                ('CustomerName', models.CharField(max_length=100)),
                ('Telephone', models.CharField(max_length=10)),
            ],
        ),
    ]
