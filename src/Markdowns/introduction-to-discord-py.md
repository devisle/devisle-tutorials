Hello, Guys Today We are gonna see what is discord.py and where is it used and also we are gonna code a simple bot out of Discord.py 

# What is Discord.py
Discord.py is a Python library for making cool and unique Discord Bots Which You Can use on your Discord Channels. We prefer it as a developer because it makes our works a lot easier.

## Where is Discord.py Used
To make it simple it's like Discord.js which is a discord Bot API library for Node.js Likewise you can use it to code a lot of cool Discord Bots.

## A simple Discord.py Bot
Before We Code I Think you guys have installed discord.py by running `python3 -m pip install -U discord.py`

```
import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

@bot.command()
async def ping(ctx):
    await ctx.send('Pong! {0}'.format(round(bot.latency, 1)))

@bot.command()
async def hello(ctx):
    await ctx.send('Hello Friend')
    
    
bot.run(" Your Discord Bot Token")
```
