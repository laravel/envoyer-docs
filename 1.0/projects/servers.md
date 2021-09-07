# Servers

[[toc]]

## Overview

After creating a project, you may add as many servers as you like to the project. After adding a server, you will be given an SSH key to add to your server. You should add the SSH key to the `~/.ssh/authorized_keys` file for the users Envoyer should connect to the server as.

After you have added the SSH key to the server, click the "refresh" icon next to the server's "Connection Status" indicator. Envoyer will attempt to connect to your server and run a few health checks on the server, such as attempting to restart PHP FPM (if it is installed on the server).

:::warning Unable to restart PHP FPM?
If Envoyer was unable to restart PHP FPM, you will receive an alert on your project overview. The information modal for the alert will provide the command needed to allow Envoyer to restart FPM without a password.
:::

## Server Configuration

There are several options you may configure when managing a server:

- **Name:** Give your server a name that you can identify easily.
- **Hostname / IP Address:** The IPv4 address of your server.
- **Port:** The port Envoyer should use to connect to your server.
- **Connect As:** The user that Envoyer should use to connect to your server.
- **Receives Code Deployments:** Determines whether the server should receive code deployments.
- **Project Path:** The absolute path to the project's root directory on your server.
- **Reload FPM After Deployments:** Determines whether the PHP-FPM service will be reloaded after each deployment.
- **FreeBSD:** Indicates whether the server is running the FreeBSD operating system.
- **PHP Version:** The version of PHP being used (also determines the version of the PHP-FPM service that will be reloaded).
- **PHP Path:** The absolute path to the PHP binary on your system.
- **Composer Path:** The absolute path to the Composer binary on your system.

### Configuring Multiple PHP Versions

If your server is configured to run multiple versions of PHP, you may find that the **Install Composer Dependencies** step uses the wrong version. To resolve this, you should define a custom Composer path configuration setting, such as `php8.0 /usr/local/bin/composer`. This setting will instruct Composer to run using PHP 8.0 instead of the system default.

### Securing Your Server With Two Factor Authentication

You can add Two Factor Authentication (2FA) in addition to SSH keys and passphrases to further secure your server. Log in via SSH and install **google-authenticator**. Research installation scripts based on your distribution. Follow the steps at the command prompt to suit your needs. Be sure to: enable the user `forge`, scan the 2FA QR code into your phone's authentication application and save recovery codes. 

  /etc/ssh/ssh_d
  ...
  # Change to yes to enable challenge-response passwords (beware issues with
  # some PAM modules and threads)
  ChallengeResponseAuthentication yes

  PasswordAuthentication no
  Match User forge
    AuthenticationMethods publickey,keyboard-interactive

  /etc/pam.d/sshd
  ...
  # skip one-time password if pushing code from envoyer
  auth sufficient pam_access.so accessfile=/etc/security/access.conf
  auth required pam_google_authenticator.so

With the basic install above you may find pushing code from source control will fail with an error `Permission denied (keyboard-interactive).` You may whitelist Envoyer's IP addresses and retain 2FA on all other machines with the following modifications. 

  (at bottom of following file:)
  /etc/security/access.conf
  ...
  +:ALL:159.65.47.205
  +:ALL:157.245.120.132
  
Before closing out your SSH session remember to run `sudo systemctl restart ssh` to clear current configuration and check that you are able to push code to envoyer without error. Also check that 2FA prompts are working when logging in via SSH on another terminal or database GUI. Premature session closeout can inadvertently lock you out of the server. Be sure your configuration works as expected. 

:::Click here for complete [configuration options](http://linux-pam.org/Linux-PAM-html/sag-configuration-file.html). Current envoyer IP addresses may be found [here](https://docs.envoyer.io/1.0/accounts/your-account.html#securing-your-account-with-two-factor-authentication).  :::

### Non-Standard PHP Services

Some VPS providers run custom versions of Ubuntu that manage PHP services in a variety of ways that are not typical. If Envoyer is not able to correctly identify and reload the correct PHP service, you will need to disable the **Reload FPM After Deployments** setting and create a custom [Deployment Hook](/1.0/projects/deployment-hooks.html) that reloads the correct service.

## Importing Laravel Forge Servers

If you have provisioned your server with [Laravel Forge](https://forge.laravel.com), you may import it into your Envoyer project. You'll need to create an API token on your Forge account and then connect it to your Envoyer account from the [Integrations](https://envoyer.io/user/profile#/integrations) dashboard.

When adding a server to your project, click the **Import Forge Server** button. Envoyer will display a modal asking you to select the server from your account and the site from the server.

Once selected, Envoyer will add the required SSH key to the connected site's user (typically `forge`, unless using a Forge configured isolated user). Envoyer will use this SSH key to connect to your server and deploy your site.

## Managing Uploaded Files

When storing user uploaded files in an Envoyer deployed Laravel application, you should store them in the application's `storage` directory. Then, you may use the "Manage Linked Folders" feature of Envoyer to create a symbolic link from your public directory to the `storage` directory. The "Manage Linked Folders" button can be found on the "Deployment Hooks" tab of your project.

If you are not using Laravel, you will essentially follow the same process. However, you will need to manually create a `storage` directory in the deployment path of your application (the same directory level as the `current` symbolic link).
