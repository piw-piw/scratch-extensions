class Text {
    getInfo () {
      return {
        id: 'text',
        name: 'Text',
        blocks: [
          {
            opcode: 'UpperCase',
            blockType: Scratch.BlockType.REPORTER,
            text: '[TextUp] to upper case',
            arguments: {
              TextUp: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'TurboWarp'
              }
            }
          }
        ]
      };
    }
  
    get (args) {
      return args.TextUp.toUpperCase();
    }
  }
  
  Scratch.extensions.register(new Text());
