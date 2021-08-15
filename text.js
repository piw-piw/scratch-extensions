class Text {
    getInfo () {
      return {
        id: 'text',
        name: 'Text',
        blocks: [
          {
            opcode: 'UpperCase',
            blockType: Scratch.BlockType.REPORTER,
            text: '[TEXT] to upper case',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'TurboWarp'
              }
            }
          }
        ]
      };
    }
  
    get (args) {
      return args.TEXT.toUpperCase();
    }
  }
  
  Scratch.extensions.register(new Text());
