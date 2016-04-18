# Letter Effects jQuery Plugin
Ambient and mouse over effects to individual characters.

## Example Implementations

Target the parent of the text you wish of effect. The plugin with wrap the containing characters with a `span` element which it then styles with inline CSS.

```html
<h1 class="randCol">Millennials in government: Interviews with our youngest public servants</h1>
```

```javascript
$(" .randCol ").letterEffect({
        "effectValues": [ "#196518", "#8c1b1b", "#555f04", "#1b5979", "#944b10" ],
     "ambientstrength": .2,
                "time": 1
});
```

The above would render the following HTML.

```html
<h1 class="randCol">
     <span class="index-0 character-M" style="color: rgb(25, 101, 24); transition: color 1.89246s ease-in-out;">M</span>
     <span class="index-1 character-i" style="color: rgb(0, 0, 0); transition: color 1.89246s ease-in-out;">i</span>
     <span class="index-2 character-l" style="color: rgb(85, 95, 4); transition: color 1.89246s ease-in-out;">l</span>
     [...]
</h1>
```

### Default Parameter Settings:

```
"effectParam"           : "color",        // CSS property to modify 
"effectValues"          : ["red", "green", "blue", "yellow"], // an array of string colour codes
"ambientAnimation"      : true,           // Enable anbient animation
"ambientstrength"       : .2,             // Percentage of affacted characters
"time"                  : .5,             // Change ambient animation every xSeconds
"drift"                 : .25,            // Amout in seconds to randomly vary animation time +/- 
"hoverAnimation"        : true,           // Enable anbient animation
"hoverTime"             : .3,             // Length of the hover transition in seconds
"hoverEase"             : "ease-in-out"   // Style of CSS transition
```


                "effectValues": ["red", "green", "blue", "yellow"],
            "ambientAnimation": true,
             "ambientstrength": .2,
                        "time": .5,
                       "drift": .25,
                 "ambientEase": "ease-in-out",
              "hoverAnimation": true,
                   "hoverTime": .3,
                   "hoverEase": "ease-in-out",