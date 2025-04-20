# Web hidden commands

Detects when someone types something anywhere in the website. 💻
Then, starts the desired effect for that keyword!

## How to implement this?

```html
<!-- Implement web hidden commands -->
<script src="script.js"></script>

<!-- Register commands & events -->
<script>
    hiddenCommands.set("dango", "dango-party-effect-should-start")
</script>

<!-- React to commands -->
<script>
    document.addEventListener('dango-party-effect-should-start', () => {
       alert("Dango party!"); 
    });
</script>
```

## System Events

| Event                                      | Explanation                                                                                     |
|--------------------------------------------|-------------------------------------------------------------------------------------------------|
| `web-hidden-commands-new-command-executed` | Executed when any new command is about to get executed. Could be used to stop previous actions. |
