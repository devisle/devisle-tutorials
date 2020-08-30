# NVM

Node Version Manager (nvm) is a tool that allows you to manage multiple versions of Node.js on the same machine. Each version runs in its own isolated environment, so you can safely switch versions.

## What is it for?

If you build Node.js applications, you may want to use different versions of Node. Fortunately, there’s an easy way to install and manage them all from a single machine thanks to Node Version Manager.

## Installing NVM

First, head over to the NVM repository and download it for your machine.

[NVM SH](https://github.com/nvm-sh/nvm)

Once the download and installation is finished, verify it installed correctly by closing your terminal if its open and running the following command:

`command -v nvm`

The above command should output "nvm" to confirm an installation. Go ahead and run the following command to install the latest version.

`nvm install node`

####To install other versions of node you will need to follow the format

`nvm install <version>`

So an example: _nvm install v8.2_

####We can check the versions currently installed on our machine with:

`nvm ls`

####We can also check all of the versions available with:

`nvm ls-remote`

####To choose a specific version, use:

`nvm use <version>`

So an example: _nvm use v8.2_

####To check which version you are currently using:

`nvm --version`

####To easily switch to the latest node version:

`nvm use stable`

You can also give a version alias, so it makes it easier to switch based on a name rather than a version number, for example:

`nvm alias myproject v8.2`  
`nvm use myproject`
