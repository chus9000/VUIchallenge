# Daily Challenge App

A beautiful web application with daily challenges that unlock one per day.

## Files Structure

- `app.html` - Main application with login and challenge list
- `detail.html` - Individual challenge detail page
- `challenges.js` - Challenge data (loaded only after authentication)
- `firebase-config.js` - Firebase configuration (for future use)

## How to Use

1. Open `app.html` in your browser
2. Click "Sign in with Google" (mock authentication)
3. Browse available challenges
4. Click on unlocked challenges to see details
5. Complete challenges using the checkbox

## Challenge Data

The challenges are stored in `challenges.js` and include:
- 30 unique challenges (currently cycles through them to reach 100)
- Each challenge has a title, description, and helpful tip
- Challenges unlock one per day based on your start date

## Features

- Beautiful glassmorphism design with light pink gradient background
- Progress tracking with visual progress bar
- Daily unlock mechanism
- Persistent progress storage
- Buy Me a Coffee integration on detail pages

## Customization

To add your Buy Me a Coffee link, edit the URL in `detail.html`:
```html
<a href="https://buymeacoffee.com/yourname" target="_blank">
```