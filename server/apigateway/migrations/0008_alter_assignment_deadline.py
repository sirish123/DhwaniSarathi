# Generated by Django 5.0 on 2023-12-12 17:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("apigateway", "0007_alter_assignment_deadline"),
    ]

    operations = [
        migrations.AlterField(
            model_name="assignment",
            name="Deadline",
            field=models.DateTimeField(
                default=datetime.datetime(
                    2023, 12, 19, 17, 3, 56, 886764, tzinfo=datetime.timezone.utc
                )
            ),
        ),
    ]
