# Real Estate Angular - Málaga

A real estate application built with Angular 21 that allows users to browse houses, view details with live weather data, and apply for housing.

## Features
- 🏠 Browse available houses
- 🌤️ Live weather at each house location
- ➕ Add new houses
- 📝 Apply form with auto-save (localStorage)

## Requirements
- Node.js
- Angular CLI
- json-server

## Installation

```bash
npm install
npm install -g json-server
```

## Running the app

### 1. Start json-server (fake backend) — Terminal 1
```bash
json-server --watch db.json --port 3001
```

### 2. Start Angular app — Terminal 2
```bash
ng serve
```

### 3. Open browser
