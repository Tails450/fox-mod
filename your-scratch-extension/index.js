const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
          // unique ID for your extension
          id: 'mathPlus',
      
          // name displayed in the Scratch UI
          name: 'Math+',
      
          // colours to use for your extension blocks
          color1: '#0ab7e2',
          color2: '#0a9de2',
      
          // your Scratch blocks
          blocks: [
            {
              // function where your code logic lives
              opcode: 'addition',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: '[NUMBER_ONE] + [NUMBER_TWO]',
      
              // arguments used in the block
              arguments: {
                NUMBER_ONE: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                },
                NUMBER_TWO: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'subtraction',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: '[NUMBER_ONE] - [NUMBER_TWO]',
      
              // arguments used in the block
              arguments: {
                NUMBER_ONE: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                },
                NUMBER_TWO: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'multiplication',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: '[NUMBER_ONE] * [NUMBER_TWO]',
      
              // arguments used in the block
              arguments: {
                NUMBER_ONE: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                },
                NUMBER_TWO: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'division',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: '[NUMBER_ONE] / [NUMBER_TWO]',
      
              // arguments used in the block
              arguments: {
                NUMBER_ONE: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                },
                NUMBER_TWO: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'exponentiation',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: '[NUMBER_ONE] ^ [NUMBER_TWO]',
      
              // arguments used in the block
              arguments: {
                NUMBER_ONE: {
                  defaultValue: 2,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                },
                NUMBER_TWO: {
                  defaultValue: 2,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'randomNumberBetween',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: 'Random number between [NUMBER_ONE] and [NUMBER_TWO]',
      
              // arguments used in the block
              arguments: {
                NUMBER_ONE: {
                  defaultValue: 1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                },
                NUMBER_TWO: {
                  defaultValue: 10,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            },
            {
              // function where your code logic lives
              opcode: 'abs',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: 'Absolute value of [NUMBER_ONE]',
      
              // arguments used in the block
              arguments: {
                NUMBER_ONE: {
                  defaultValue: -1,
      
                  // type/shape of the parameter
                  type: ArgumentType.NUMBER
                }
              }
            }
          ]
        };
      }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    addition ({ NUMBER_ONE, NUMBER_TWO }) {
      const num1 = parseFloat(NUMBER_ONE);
      const num2 = parseFloat(NUMBER_TWO);

      return num1 + num2;
    }

    subtraction ({ NUMBER_ONE, NUMBER_TWO }) {
      const num1 = parseFloat(NUMBER_ONE);
      const num2 = parseFloat(NUMBER_TWO);

      return num1 - num2;
    }

    multiplication ({ NUMBER_ONE, NUMBER_TWO }) {
      const num1 = parseFloat(NUMBER_ONE);
      const num2 = parseFloat(NUMBER_TWO);

      return num1 * num2;
    }

    division ({ NUMBER_ONE, NUMBER_TWO }) {
      const num1 = parseFloat(NUMBER_ONE);
      const num2 = parseFloat(NUMBER_TWO);

      return num1 / num2;
    }

    exponentiation ({ NUMBER_ONE, NUMBER_TWO }) {
      const num1 = parseFloat(NUMBER_ONE);
      const num2 = parseFloat(NUMBER_TWO);

      return num1 ** num2;
    }

    randomNumberBetween ({ NUMBER_ONE, NUMBER_TWO }) {
      const num1 = parseFloat(NUMBER_ONE);
      const num2 = parseFloat(NUMBER_TWO);

      return Math.random() * (num2 - num1) + num1;
    }

    abs ({ NUMBER_ONE }) {
      const num1 = parseFloat(NUMBER_ONE);

      return Math.abs(num1);
    }
}

module.exports = Scratch3YourExtension;
