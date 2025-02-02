# Quiz App

A fun and interactive web-based quiz application with gamification features. This app allows users to take a quiz, answer questions, and receive scores with immediate feedback on their answers. The application includes animations, sound effects, and a modern, sleek design.

## Project Overview

This quiz app features:

- **Multiple Choice Questions**: The user is presented with a series of questions and multiple options.
- **Gamified Scoring System**: Correct answers earn +4 points, while incorrect answers deduct -1 point.
- **Interactive Animations**: The app uses `framer-motion` to provide smooth and visually appealing animations.
- **Sound Feedback**: Sounds are played for correct and incorrect answers.
- **Results Page**: A results page is displayed after quiz completion with a score summary.
- **Timer Functionality**: Each question has a timer to challenge users to answer within a set time frame, adding urgency and enhancing the gamification aspect.
- **React Router**: For handling navigation between pages (Home, Quiz, Results).

## Timer Functionality

To enhance the gamified experience, the quiz includes a **timer** for each question. The timer counts down from 30 seconds for each question. When the time runs out:

- The current question is marked as unanswered, and the app moves to the next question.
- The user is notified if they failed to answer within the time limit.
- This feature helps create a sense of urgency and challenges users to think quickly.

The timer is visually displayed at the top of each quiz question page, providing real-time feedback to users on how much time they have left.

## Tech Stack

- **Frontend**: React.js
- **State Management**: Zustand
- **Animations**: `framer-motion`
- **Routing**: `react-router-dom`
- **Sound**: Custom sounds for correct and incorrect answers.
- **Styling**: Tailwind CSS

## Live Demo

Check out the live version of the app:  
[Quiz App](https://quiz-app-developerdev2007.netlify.app/)

## Screenshots

Here are some screenshots of the app:

![Home Page](/screenshots/HomePage.png)

![Quiz Page](/screenshots/QuizPage1.png)

<!-- ![Quiz Page](/screenshots/QuizPage2.png) -->

![Quiz Page](/screenshots/QuizPage3.png)

![Results Page](/screenshots/ResultPage.png)

## Video Demo

Watch the demo video here:

[![Quiz App Video](/videos/quiz-app.gif)](/video/quiz-app.gif)

[![Quiz App Video](/videos/Quiz-app-video-demo.mp4)](/video/Quiz-app-video-demo.mp4)

If the video is not playing, you can watch it on Google Drive:

[Watch Video on Google Drive](https://drive.google.com/file/d/1VEFyoxQH5SmDB-loLV1lYyndcrvxOd9y/view?usp=sharing)

## Setup Instructions

Follow these steps to get the project up and running on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/developerdev2007/quiz-app.git
cd quiz-app
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. Start the Development Server

Run the development server with:

```bash
npm run dev
```

The app should now be running at `http://localhost:5173/` (if using Vite).

### 4. Build for Production

To create an optimized production build, run:

```bash
npm run build
```

### 5. Run the Production Build

To serve the built application, use:

```bash
npm run preview
```

### 6. Environment Variables (if any)

If the quiz data is fetched from an API, create a `.env` file and add your API endpoint:

```plaintext
VITE_API_URL=https://your-api-endpoint.com
```

Make sure to replace the URL with the actual API endpoint.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements.

## Contact

For any questions or support, feel free to reach out at **developerdev2007@gmail.com**
