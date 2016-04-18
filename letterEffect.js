// Restore $.browser support

jQuery.uaMatch = function(ua) {
    ua = ua.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
        browser: match[1] || "",
        version: match[2] || "0"
    };
};
if (!jQuery.browser) {
    var
    matched = jQuery.uaMatch(navigator.userAgent),
        browser = {};
    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
    }
    // Chrome is Webkit, but Webkit is also Safari.
    if (browser.chrome) {
        browser.webkit = true;
    } else if (browser.webkit) {
        browser.safari = true;
    }
    jQuery.browser = browser;
}


// Random Letter Colour Plugin Starts

(function($) {

    $.fn.letterEffect = function(options) {

        var s = 1000;

        // Establish our default settings
        var settings = {
                       "color": ["red", "green", "blue"],
            "ambientAnimation": true,
             "ambientstrength": .2,
                        "time": .5,
                       "drift": .25,
              "hoverAnimation": true,
                   "hoverTime": .3
        };

        // User Overides
        var userSettings = $.extend(settings, options);
        
        var ambientAnimation = userSettings.ambientAnimation;
        var ambientstrength = userSettings.ambientstrength;
        var hoverAnimation = userSettings.hoverAnimation;

        // Randomize Time Duration by a set amount
        var time = userSettings.time;
        var drift = userSettings.drift / 2;
        var max = time + drift;
        var min = time - drift;

        // User defined colour array
        var colours = userSettings.color;
        // Colour inherited from CSS 
        var originColour = $(this).css("color");
        
        var hoverTime = userSettings.hoverTime;
        
        var randomTime = (Math.random() * (max - min + 1)) + min;
        
        // Start Functions //
        
        // Set up spans between each number
        function letterChop(w) {

            var html = $( w ).html();
            var ret = "";

            // Wrap each letter in a span
            $.each(html.split(''), function(k, v) {
                ret += '<span class="index-' + k + ' character-' + v +'">' + v + '</span>';
            });
            $( w ).html(ret);
        }

        // Random ambient colour change
        function ambientEffect(x) {
            
            // Randomize is applied
            var randomTime = (Math.random() * (max - min + 1)) + min;
            var newColour = "";

            
            // Change to inherited colour or random colour
            var randomNum = Math.random();        
            if (randomNum > ambientstrength ) {
                var newColour = originColour;
            } else {
                
                // Change or hold colour    
                var randomNum = Math.random(); 
                if (randomNum > 0.6 ) {
                    // Leave the colour or change it
                    var startColour = $( x ).css("color");                
                    var newColour = startColour;                    
                } else {
                // Random sort
                colours.sort(function() {
                    return 0.5 - Math.random()
                });
                var newColour = colours[0];
                }
            }

            // Choose browser prefix
            var myTransition = 
                ($.browser.chrome) ? '-webkit-transition' :
                ($.browser.mozilla) ? '-moz-transition' :
                ($.browser.msie) ? '-ms-transition' :
                ($.browser.opera) ? '-o-transition' : 'transition',
                myCSSObj = {
                    color: newColour
                };

            myCSSObj[myTransition] = 'color ' + randomTime + 's ease-in-out';

            $(x).css(myCSSObj);

        };
        
        // Colour change on mouse in and out
        function hoverEffect(x) {
            
            // Randomize is applied
            var newColour = "";
                              
            // Random sort
            colours.sort(function() {
                return 0.5 - Math.random()
            });
            
            var newColour = colours[0];    

            // Choose browser prefix
            var myTransition = 
                ($.browser.chrome) ? '-webkit-transition' :
                ($.browser.mozilla) ? '-moz-transition' :
                ($.browser.msie) ? '-ms-transition' :
                ($.browser.opera) ? '-o-transition' : 'transition',
                myCSSObj = {
                    color: newColour
                };

            myCSSObj[myTransition] = 'color ' + hoverTime + 's ease-in-out';

            $(x).css(myCSSObj);

        };
        
        
        
        function letterTimer(y) {

            // Ambient Colour Change            
            window.setInterval( function() {
            $( y ).children('span').each(function() {

                var randomTime = (Math.random() * (max - min + 1)) + min;
                ambientEffect(this);
            });
                
            }, randomTime * s * 2);

        };
        
        
        // Instance of effect is applied to each letter
        $( this ).each(function() {
            
            letterChop(this);
            
            // Mouse Hover Effect
            if (hoverAnimation == true) {
                $( this ).children('span').mouseenter(function() {
                    $( this ).hover( function() {
                        hoverEffect(this);
                    }, function() {
                        hoverEffect(this);
                    } );
                });
            }

            
            // Ambient Effect
            if (ambientAnimation == true) {
                letterTimer(this);
            };
            
        });


        return this;

    };


}(jQuery));