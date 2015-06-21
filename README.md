### Website Performance Optimization portfolio project

To run the project please visit the link below:

http://lichingyew.com/frontend-nanodegree-mobile-portfolio-master/

For index.html it was optimised with the following methods:

1. Inline the style.css and fonts
2. Use media print for print.css
3. Removed Google Analytics
4. Optimised the images
5. Minified the HTML


For pizza.html it was optimised with the following methods on main.js:

1. The function updatePositions() was optimised by performing the calculations outside of the for loop.
2. The function changePizzaSizes() was optimised by performing the calculations outside of the for loop.
3. Reduced the number of background pizzas rendered to 100.
4. Added `"use strict”;` tag in your function definitions to enable the strict mode.
5. Dynamically calculated the number of moving pizzas required.


Time to generate pizza on initial load: approx 10ms
Time to resize pizzas: approx 1ms
Average time to generate last 10 frames: approx 0.2 - 2.2