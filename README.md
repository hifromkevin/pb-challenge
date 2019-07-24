# Pottery Barn Coding Challenge

## Directions:
 - Display a fully responsive grid of products from the attached json file (image, name, price)
 - User clicks product to store the product in local storage
 - Stored products are persistent and rendered (from local storage) in another section (either same page or different page)
 - User can click stored products to remove them from local storage
 - We'll be testing persistence by closing the browser and reloading the page
 - As much as possible, stick to vanilla JavaScript for DOM manipulation (queries, events, etc.)

## Requirements:
 - Node (Tested using Node v11.13.0, but any modern version should work)

## Decision:
I coded this application in vanilla Javascript. My reasoning is to fulfill the requirement "As much as possible, stick to vanilla JavaScript for DOM manipulation". My default method would have been to utilize React, in that I could use the built-in onClick method, as well as re-render my application when state is updated. 


## To Begin: 
 - Locate the root folder with your terminal
 - Enter 'npm install' for dependencies
 - Enter 'npm start' to render application to http://localhost:3005/ (inspired by the Childish Gambino song '3005')

## Using the App:
 - Click on the desired product(s) to save
 - Go to http://localhost:3005/saved.html to view the list of selected product(s)
 - Click on a saved product to remove it from the list of saved products

## Future Developments:
Due to time constraints, I wanted to produce an MVP that performed the basic functionality. 
With more time, I would:
 - Create a modal with information about the item that is being saved, or letting the user know that the item has already been favorited 
 - Along similar lines, perhaps create some sort of icon (like a star) to let users know they have selected an item. This might also allow the user to add/remove saved items from the main display page
 - Rather than hard-coding 'localStorage', create a variable that the user can select with buttons for "Local Storage" or "Session Storage"
 - Better styling with more exact media queries
 - I would better optimize my code, such as implementing a cache to limit the amount of looping being performed. 
