### Website Performance Optimization portfolio project

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

Time to generate pizza on initial load: approx 30ms
Time to resize pizzas: 1.14ms
Average time to generate last 10 frames: approx 0.4 - 2.4