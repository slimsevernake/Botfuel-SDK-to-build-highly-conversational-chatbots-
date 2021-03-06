# test-complexdialogs

This bot tests complex dialogs that include digressions, multi-intents, and random access navigation.

## Create an app

Create an app and add intents/QnAs on Botfuel Trainer (https://app.botfuel.io).

You can get examples of intents here : https://github.com/Botfuel/botfuel-dialog/blob/master/packages/test-complexdialogs/intents.xlsx

See the [Getting Started tutorial](https://docs.botfuel.io/platform/tutorials/getting-started) for how to create a new app.

## Run the bot

To run this bot in your terminal:

```shell
BOTFUEL_APP_TOKEN=<...> BOTFUEL_APP_ID=<...> BOTFUEL_APP_KEY=<...> npm start
```

## Run the tests

```shell
BOTFUEL_APP_TOKEN=<...> BOTFUEL_APP_ID=<...> BOTFUEL_APP_KEY=<...> npm test
```

## Clean the brain

To empty the brain of your bot:

```shell
BOTFUEL_APP_TOKEN=<...> npm run clean
```

## Need help ?

* See [**Getting Started**](https://docs.botfuel.io/platform/tutorials/getting-started) to learn how to run a bot in minutes.
* See [**Concepts**](https://docs.botfuel.io/platform/concepts) for explanations about the internals of the SDK.

## License

See the [**License**](LICENSE.md) file.
