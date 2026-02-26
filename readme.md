# React Image Slider (Professional TranslateX Slider)

A modern, responsive, and professional image slider built with React. This slider uses translateX animation for smooth transitions and includes autoplay, pause on hover, and manual navigation controls.

## Features

* Smooth translateX animation
* Autoplay functionality
* Pause on hover
* Next and previous navigation buttons
* Infinite looping
* Responsive design
* Professional UI design
* Clean and maintainable code
* Uses React Hooks (useState, useEffect, useRef)

## Demo

Slider automatically plays and pauses when hovering over the image.

### UI Preview
<img width="1359" height="641" alt="slider" src="https://github.com/user-attachments/assets/8795fcad-4318-4cfd-aebb-ac576333db72" />

## Technologies Used

* React JS
* JavaScript (ES6)
* CSS3
* HTML5

## Project Structure

```
src/
│
├── components/
│   └── Slider.jsx
│
├── data/
│   └── JsonData.json
│
├── App.js
└── index.js
```

## How It Works

The slider uses CSS transform: translateX() to move slides horizontally. This method provides smooth and high-performance animations compared to switching image sources.

Autoplay is implemented using setInterval and useRef, and pauses automatically when the user hovers over the slider.

## Installation

Clone the repository:

```
git clone https://github.com/your-username/react-image-slider.git
```

Navigate to project folder:

```
cd react-image-slider
```

Install dependencies:

```
npm install
```

Run the project:

```
npm run dev
```

## Future Improvements

* Add dot indicators
* Add touch/swipe support
* Add thumbnails navigation
* Add lazy loading
* Add animation effects (fade, zoom)

## Learning Purpose

This project demonstrates:

* Professional React component structure
* State management with hooks
* DOM animation using translateX
* Autoplay implementation
* Clean and scalable UI design

## Author
M Qasim
