# Generated by Django 3.2.4 on 2021-07-03 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('UserId', models.AutoField(primary_key=True, serialize=False)),
                ('UserName', models.CharField(max_length=100)),
                ('UserType', models.CharField(max_length=100)),
                ('Password', models.CharField(max_length=10)),
            ],
        ),
    ]