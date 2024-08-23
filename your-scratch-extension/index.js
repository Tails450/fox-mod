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
          id: 'spotify',
      
          // name displayed in the Scratch UI
          name: 'Spotify',
      
          // colours to use for your extension blocks
          color1: '#0ab7e2',
          color2: '#0a9de2',
      
          // your Scratch blocks
          blocks: [
            {
              // function where your code logic lives
              opcode: 'preview',
      
              // type of block
              blockType: BlockType.REPORTER,
      
              // label to display on the block
              text: 'Play preview [songTitle]',
      
              // arguments used in the block
              arguments: {
                songTitle: {
                  defaultValue: 'Hello',
      
                  // type/shape of the parameter
                  type: ArgumentType.STRING
                }
              }
            },
          ]
        };
      }

    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    preview ({ songTitle }) {
      async function getAccessToken() {
        const clientId = '15f177fa11724997839c9e52786f5eac';
        const clientSecret = '8102881d1843466ba1f5d754da5af686';
    
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
    
        const data = await response.json();
        return data.access_token;
    }
    
    // Step 2: Search for the track by title
    async function searchTrack(title, accessToken) {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(title)}&type=track`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    
        const data = await response.json();
        return data.tracks.items[0]; // Returns the first track match
    }
    
    // Step 3: Play the track using the preview URL
    function playPreview(url) {
        const audio = new Audio(url);
        audio.play();
    }
    
    // Step 4: Putting it all together
    async function getAndPlayTrack(title) {
        try {
            const token = await getAccessToken();
            const track = await searchTrack(title, token);
    
            if (track && track.preview_url) {
                console.log(`Playing: ${track.name} by ${track.artists.map(artist => artist.name).join(', ')}`);
                playPreview(track.preview_url);
            } else {
                console.log('Track not found or no preview available.');
            }
        } catch (error) {
            console.error('Error fetching track:', error);
        }
    }
    
    // Example usage:
    getAndPlayTrack('Blinding Lights'); // Replace with your song title
    }
}

module.exports = Scratch3YourExtension;
