# Quick Start

[[toc]]

This section provides a step-by-step guide to configure your application and infrastructure for zero-downtime deployments with Envoyer.

There are four simple and intuitive steps to get started.

## Source Providers
The first thing to do is connect Envoyer with your preferred source control provider. Envoyer provides support for GitHub, Bitbucket, GitLab and self-hosted GitLab.

From the onboarding screen, select your provider and follow the authentication flow, which will allow Envoyer the access required to interact with your repositories on your behalf.

As soon as you connect with a provider, this step of the onboarding flow will be complete. Should you wish to connect additional providers, you may do so from the [integrations](https://envoyer.io/user/profile#/integrations) panel of your account setting.

## Projects
With your source control provider connected, you may configure your first project.

Click the "Add project" button to open the project creation modal.

Give your project a descriptive name and select the source control provider associated with your application.

Finally, enter the repository information in the format `organization/project` along with your default branch name. Envoyer will automatically deploy from the default branch unless overridden during deployment.

## Servers
With your project created, you must tell Envoyer which server or servers to deploy to.

### Import From Forge
Envoyer has a tight integration with [Forge](https://forge.laravel.com) - Laravel's server provisioning platform - and you may import servers from Forge directly into your project.

Click the "Provide API Token" option from the onboarding screen and provide a Forge API token. On the onboarding screen, you may select the "Import" option to open the import modal. From here, select the server and site you wish to import. Envoyer will pull in the connection details from the server and automatically add an SSH key to allow it to connect.

### Attach From Forge
It's also possible to attach a server to your Envoyer project [directly from Forge](https://forge.laravel.com/docs/sites/envoyer.html). When creating a new site, you may choose "Configure with Envoyer," allowing you to select the Envoyer project you wish the site to be attached to. Doing so will automatically configure the connection between Envoyer and Forge, install an SSH key and set the correct path on the server to serve the project.

### Manual Import
Don't worry if you're not using Forge; you may configure your server manually. Select the "Configure" option from the onboarding screen in the "Manual Configuration" section. After adding the [connection details](/projects/servers.html#server-configuration) for your server, add the provided SSH key to the `~/.ssh/authorized_keys` file for the users Envoyer should connect to the server as.

## Deployments
The final part of your journey to zero-downtime deployments is configuring what should happen during the deployment itself.

Envoyer provides a lot of flexibility and control over your deployments - you can read more about that in the [hooks](/projects/deployment-hooks.html) section, but for your first deployment, there are only two things to consider.

The first is your deployment path. Which directory on your server(s) should Envoyer deploy your application, and which directory should your server serve your application? You may configure the path to this directory by opening the "Update server" modal from your project's "Servers" tab.

Envoyer creates a `releases` directory in which your latest code is copied when you initiate a deployment. A `current` symlink is also created that links to the latest release.

If your deployment path is `/home/forge/app.com`, you should set your web server's document root directory to `/home/forge/app.com/current/public`.

:::info Adding Server From Forge
When adding a server to Envoyer from Forge, the app path and the web root are set automatically.
:::

Finally, Envoyer can manage your application's environment variables, syncing them to all servers attached to a project. You should likely configure this before your first deployment.

You may do so by selecting "Manage Environment" from the project overview page. First, you must provide a key to encrypt the variables stored on our servers and choose the servers. Next, you can enter your variables and select which servers you wish to sync them to. Envoyer will then connect to the selected servers and sync the variables to a `.env file in your chosen project path.

With these steps complete, you may deploy your project by clicking the "Deploy" button from your project overview, which will open the deployment modal, allowing you to choose the branch or tag you wish to deploy.

Envoyer will attempt to connect to each server and clone the code of the chosen branch or tag of the configured repository into a new directory in the releases directory. Next, Composer dependencies are installed before the symlink is updated, making the new release live.

**Congratulations, you've just successfully completed your first zero-downtime deployment.**