# Generated by Django 5.0 on 2023-12-13 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apigateway', '0016_merge_20231213_2341'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='Deadline',
            field=models.DateTimeField(default='2023-12-20 18:11:38+0000'),
        ),
    ]