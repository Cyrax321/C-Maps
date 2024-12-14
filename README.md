# C Maps 🌍

**C Maps** is a simple interactive map app using **HTML**, **CSS**, and **JavaScript** with **Leaflet.js**. It shows your current location, lets you add markers, and lets you toggle between light and dark modes. 

---

## Features 🎉
- 📍 **Get your current location**: Map centers on your location using geolocation.
- 🌍 **Click to add markers**: Tap anywhere on the map to drop a marker.
- 🌑 **Light/Dark Mode**: Switch between light and dark themes to match your vibe.
- 📱 **Mobile-friendly**: Works on both desktop and mobile devices.

---
 **Play Around**:  
   - The map will start with your current location.  
   - Click on the map to drop markers.  
   - Tap the **Switch to Dark Mode** or **Switch to Light Mode** button to change themes.  

---

## File Structure 📁
```
C Maps/
├── index.html  # Main page (front-end)
├── style.css   # Styles for light and dark modes
└── script.js   # Map logic and theme switching
```

---

## Help me Customize 🔧  
- **Location Settings**:  
  Change the default view by updating the coordinates in `script.js`.  
  ```javascript  
  map = L.map('map').setView([latitude, longitude], 13);  
  ```  

- **Change the Themes**:  
  Modify the `style.css` to tweak the colors and look of the light/dark modes.  

- **Add More Features**:  
  - Add a search bar.  
  - Include routing to show paths.  
  - Customize markers with your own icons.  

---

## Why Choose C Maps? 🤔  
- It's simple, clean, and responsive.  
- Learn to use Leaflet.js.  
- Perfect for exploring or creating personalized maps.  

---

## Contributions ✨
Got an idea or a bug fix? Hit me up with a PR!  
Feel free to fork this repo and make it your own.

---

Have fun exploring the world with **C Maps**! 🌍
