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
          id: 'yourScratchExtension',
      
          // name displayed in the Scratch UI
          name: 'Demo',
      
          // colours to use for your extension blocks
          color1: '#000099',
          color2: '#660066',
      
          // your Scratch blocks
          blocks: [
            {
              // function where your code logic lives
              opcode: 'myFirstBlock',
      
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
            }
          ]
        };
      }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    myFirstBlock ({ NUMBER_ONE, NUMBER_TWO }) {
        // Convert the inputs to numbers
        const num1 = parseFloat(NUMBER_ONE);
        const num2 = parseFloat(NUMBER_TWO);
  
        // Return their sum
        return num1 + num2;
      }
}

module.exports = Scratch3YourExtension;
