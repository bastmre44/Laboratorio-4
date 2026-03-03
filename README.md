# Disci-App

Disci-App is a web application developed using HTML, CSS,
JavaScript. It implements a gamification system to encourage discipline
through mission creation and experience (XP) accumulation.

------------------------------------------------------------------------

## Description

Disci-App allows users to:

-   Create custom missions.
-   Assign a difficulty level to each mission.
-   Earn experience points (XP) by completing missions.
-   Level up based on accumulated XP.
-   Maintain progress using localStorage.

The application follows a minimalistic, modern, and professional design
approach.

------------------------------------------------------------------------

## Technologies Used

-   HTML\
-   CSS\
-   JavaScript \
-   LocalStorage (for data persistence)

No external frameworks or libraries were used.

------------------------------------------------------------------------

## Gamification System

### Difficulty Levels

-   Easy → 10 XP\
-   Normal → 25 XP\
-   Hard → 50 XP

### Ranks

-   Novice → Less than 50 XP\
-   Wizard → Between 50 and 99 XP\
-   Sorcerer → 100 XP or more

### Mission Status

-   PENDING\
-   SUCCESSFUL

Each created mission is logged in the browser console as required by the
lab instructions.

------------------------------------------------------------------------

## Data Persistence

The application uses localStorage to store:

-   Total XP\
-   Mission list

This ensures that user progress is maintained even after refreshing the
page.

------------------------------------------------------------------------

## Installation and Usage

1.  Clone the repository: git clone 
{=https://github.com/bastmre44/Laboratorio-4.git}

2.  Navigate to the project folder: cd disci-app/src

3.  Open index.html in your browser.

No additional dependencies are required.

------------------------------------------------------------------------

## Project Structure

disci-app/

-   README.md\

-   .gitignore

-   src/

    -   index.html\
    -   css/
        -   styles.css\
    -   js/
        -   script.js

-   docs/

-   video/

------------------------------------------------------------------------

##  Demo Video

The demo video is located in the /video folder it is a canvas link  and demonstrates:
{https://www.canva.com/design/DAHC3DzlzB4/PIe8x8LumnvhSuG-buBeaw/edit?utm_content=DAHC3DzlzB4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton}


-   Creating a mission\
-   Console log registration\
-   Completing a mission\
-   XP increase\
-   Rank change\
-   Data persistence using localStorage

------------------------------------------------------------------------

##  Author
Mishell Jimenez 231169
Developed as part of the Web Systems laboratory assignment.
