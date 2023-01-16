module.exports = {
  name: `plugin-command`,
  factory: require => {
    const {BaseCommand} = require(`@yarnpkg/cli`);

    class CustomCommand extends BaseCommand {
      static paths = [[`customCommand`]];

      async execute() {
        this.context.stdout.write(`This is a custom command\n`);
      }
    }

    return {
      commands: [
        CustomCommand,
      ],
    };
  }
};