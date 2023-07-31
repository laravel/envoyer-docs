# Heartbeats

[[toc]]

## Overview

Heartbeats provide a monitoring mechanism for your Cron jobs or any other scheduled task performed by your application. You may select from a variety of schedule frequencies when creating the heartbeat. So, for example, if your scheduled job runs daily, you should select the 1 Day monitoring option.

After creating a heartbeat, a unique URL will be assigned to the heartbeat. When this URL is called via a HTTP `GET` request, the "Last Check-In" time of your heartbeat will be updated.

If Envoyer does not receive a check-in from your job within the specified monitoring frequency, a notification will be sent to your configured notification channels.

## Heartbeat URLs

### Calling Manually

If you are manually modifying your server's `/etc/crontab` file to define scheduled tasks, you can simply append a curl request to your Cron command. For example:

```
* * * * * user php command && curl http://beats.envoyer.io/heartbeat-id
```

### Calling With Laravel

If you're using Laravel's task scheduler, you may use the `thenPing` method on your scheduled job.

```php
$schedule->command('foo')->thenPing('http://beats.envoyer.io/heartbeat-id');
```

## Heartbeat IP Addresses

If you need to allow access to your heartbeat URLs by IP address, you should allow the following IP addresses so that Envoyer can ping your URL:

- New York: `198.199.84.22`
- London: `167.71.140.19`
- Singapore: `167.71.208.72`
