# Generated by Django 5.0 on 2023-12-12 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apigateway', '0013_merge_20231212_2313'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='Deadline',
            field=models.DateTimeField(default='2023-12-19 18:38:04+0000'),
        ),
    ]