class Tabs {
    getInfo () {
      return {
        id: 'tabs',
        name: 'Tabs',
        blocks: [
          {
            opcode: 'openURL',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://turbowarp.org'
              }
            }
          }
        ]
      };
    }
  
    get (args) {
      return window.open(args.URL);
    }
  }
  
  Scratch.extensions.register(new Tabs());
