# Introduction

[[toc]]

## What Is Envoyer?

[Envoyer](https://envoyer.io) is a zero downtime deployment service for PHP. Some highlights of Envoyer's features include:

- GitHub, GitLab & Bitbucket Integration
- GitLab Self-Hosted Integration
- Seamless Deployment Rollbacks
- Application Health Checks
- Integrated Chat Notifications
- Tuned for Laravel Apps
- Deploy Any PHP Project
- Unlimited Deployments
- Deploy To Multiple Servers
- Cron Job Monitoring
- Unlimited Team Members
- Customize Your Deployments
- Import Your [Laravel Forge](https://forge.laravel.com) Servers

## Video Series

Laracasts has a comprehensive and [free video course](https://laracasts.com/series/envoyer) on Envoyer. Feel free to review this course if you are new to Laravel Envoyer and want a video overview of its features.

## Forge Integration

[Laravel Forge](https://forge.laravel.com) now offers a first-party integration with Envoyer. [Learn more](https://blog.laravel.com/forge-zero-downtime-deployments).

![Laravel Forge x Envoyer](/img/forge-envoyer-integration-header.png)

## Account Creation

To get started with Envoyer, you must [first create an account](https://envoyer.io/auth/register). If you are just collaborating with others on their projects, you are not required to have an Envoyer subscription.
To create and manage your own projects, you will need an Envoyer subscription.

## Envoyer IP Addresses

If you are restricting SSH access to your server using IP whitelisting, you **must** whitelist the following IP addresses:

- `159.65.47.205`
- `157.245.120.132`
- `134.122.14.47`

You may also need to whitelist the [Heartbeat IP addresses](/projects/heartbeats#heartbeat-ip-addresses).

## Envoyer API

Envoyer provides a powerful API that allows you to manage your servers programatically, providing access to the vast majority of Envoyer features. You can find the Envoyer API documentation [here](https://envoyer.io/api-documentation).

## Found Something Wrong?

If you find something in the documentation that is misleading or outright wrong, please consider submitting a pull request on [GitHub](https://github.com/laravel/envoyer-docs).
