# Letter-Effects-jQuery-Plugin
Ambient and mouse over effects to individual characters.

## Example Implementations

Target the parent of the text element. 

With no configuring required it will cause the "Close" action to fire. 

```html
    <h1 class="randCol">Millennials in government: Interviews with our youngest public servants</h1>
```

```javascript
$(" .randCol ").letterEffect({
               "color": [ "#196518", "#8c1b1b", "#555f04", "#1b5979", "#944b10" ],
     "ambientstrength": .2,
                "time": 1
});
```

### Default Parameter Settings:

```
"color"                 : ["red", "green", "blue"], // an array of colour codes
"ambientAnimation"      : true, // Enable anbient animation
"ambientstrength"       : .2,   // Percentage of affacted characters
"time"                  : .5,   // Change ambient animation every xSeconds
"drift"                 : .25,  // Amout in seconds to randomly vary animation time by +/- 
"hoverAnimation"        : true, // Enable anbient animation
"hoverTime"             : .3    // Length of the hover transition in seconds
```
