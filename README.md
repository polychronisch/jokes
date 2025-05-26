# 🤣 Vue Joke Collector

A Vue 3 application built with TypeScript and Tailwind CSS that integrates with the [Official Joke API](https://github.com/15Dkatz/official_joke_api) to fetch and display jokes. Users can save their favorite jokes, rate them from 1 to 5 stars, and filter or sort their personal joke collection.

## 📸 Features

- 🎭 Fetch random jokes from the Official Joke API
- ⭐ Rate jokes (1 to 5 stars)
- 💾 Store jokes in localStorage
- 🗃️ Manage a personal joke collection
- 🔍 Filter jokes by rating
- ↕️ Sort jokes:
  - Alphabetically (A–Z / Z–A)
  - By rating (High–Low / Low–High)
- ⚡ Built using:
  - Vue 3 with the Composition API
  - TypeScript
  - Tailwind CSS
  - Modular composables architecture

## 🧱 Project Structure

- ├── composables/ # Reusable logic (API communication)
- ├── components/ # Vue components (JokeCard, Filters, etc.)
- ├── views/ # Main views (Discovery, Collection)
- ├── App.vue # Root component

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

- npm install
- npm run build - npm run dev

### ⚙️ Configuration

No additional configuration is required. The app communicates with the public Official Joke API and stores data locally in the browser's localStorage.

### 🔧 Tech Stack

Vue 3

TypeScript

Tailwind CSS

Vite (for build and dev server)

Official Joke API

### 🧪 Future Improvements (optional)

Add animations or transitions for UI feedback - especially the part for changing jokes
