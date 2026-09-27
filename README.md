# FITLOG

FITLOG is a modern workout and exercise tracking web application built with Next.js. It allows users to explore exercises, view detailed workout information, create a personal workout plan, save exercises for later, and track completed exercises.

## 🚀 Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- REST API
- Next.js Image Optimization
- Next.js App Router

## ✨ Key Features

### 1. Exercise Discovery

Browse a collection of exercises with useful information such as:

- Exercise name
- Description
- Muscle groups
- Difficulty
- Duration
- Calories burned

### 2. Exercise Details

View detailed information about each exercise, including:

- Equipment
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

Users can also add exercises to today's plan or save them for later.

### 3. Personal Workout Plan

The My Plan page allows users to manage their workout routine.

Users can:

- Add exercises to today's plan
- Remove exercises from the plan
- Mark exercises as completed
- View exercise details
- Sort exercises by name, duration, or calories
- See total exercises, duration, and calories

### 4. Save Exercises for Later

Users can save exercises that they want to revisit later.

The Saved tab allows users to:

- View saved exercises
- Open exercise details
- Remove saved exercises

### 5. Responsive User Interface

FITLOG provides a responsive interface that works across:

- Desktop
- Tablet
- Mobile

The navigation, exercise cards, workout plan, buttons, and layouts adapt to different screen sizes.

## 📁 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── shared/
│   │   └── workouts/
│   ├── exercises/
│   │   └── [id]/
│   ├── my-plan/
│   ├── not-found.jsx
│   ├── loading.jsx
│   ├── layout.jsx
│   └── page.jsx
│
├── context/
│   └── PlanContext.jsx
│
└── assets/
```
