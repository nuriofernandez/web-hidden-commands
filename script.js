/**
 * Detects when someone types something anywhere in the website. 💻
 * Then, starts the desired effect for that keyword!
 */

/**
 * List of commands and linked event names
 * @type {Map<any, any>} command, event
 */
const hiddenCommands = new Map();

// Current command input line
let input = "";

// Register key press listener
document.addEventListener('keypress',function(e){
    input += String.fromCharCode(e.keyCode).toLowerCase();

    for (const command in hiddenCommands) {
        if(input.endsWith(command)) {
            // Broadcast new command being executed
            const newCommandBroadcast = new Event('web-hidden-commands-new-command-executed');
            document.dispatchEvent(newCommandBroadcast);

            // Broadcast specific command
            const commandEventName = hiddenCommands[command];
            const event = new Event(commandEventName);
            document.dispatchEvent(event);
        }
    }
});
