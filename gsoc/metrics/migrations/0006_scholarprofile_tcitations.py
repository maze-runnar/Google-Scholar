# Generated by Django 2.2.3 on 2019-07-16 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('metrics', '0005_scholarprofile_publications'),
    ]

    operations = [
        migrations.AddField(
            model_name='scholarprofile',
            name='Tcitations',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
