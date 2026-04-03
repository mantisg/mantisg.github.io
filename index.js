const detailsWindow = document.getElementById('details-window');
const p1 = document.getElementById('polygonia');
const p2 = document.getElementById('anassa');
const p3 = document.getElementById('bagaje');
const p4 = document.getElementById('geometry');
const p5 = document.getElementById('ctphome');
const p6 = document.getElementById('luca');

const descriptions = {
    'polygonia': 'Polygonia is a rogue-like game built using Python and the Pygame library. In it, I have added procedurally generated maps, item collection, and enemy battles. All of the artwork is made by Aaron Robertson in tools like MS Paint. I use Object-Oriented Programming paradigms to make the code modular and reusable. This is still a work in progress, but it is coming along nicely and will have continuous updates.',
    'anassa': 'Anassa is an E-Commerce website built with the Django framework. It features a responsive design, user authentication, and a product catalog. This was my first time using Django and I learned a great deal from it. Django is a very powerful tool for building complex web applications and I look forward to my next opportunity to use it. Unfortunately, the client that I was building this site for backed out of our contract for personal reasons so this will never be finished, but I still feel it is a great representation of how quickly I can pick up a new framework. There are mistakes and a lot of parts of this project that I would do differently looking at it with wiser eyes. Perhaps I will revisit this project to structure it more clearly.',
    'bagaje': 'Bagaje is a social media-esque web application being built with Flask and MongoDB. It allows users to create posts, comments, and interact with content posted by one person. My mother-in-law was tired of getting hacked on sites like Facebook and Instagram and asked if I could make her a site for her followers and fans to interact with her without the noise of the general public. This was once again, my first attempt at doing so. After my exposure to Django in the Anassa project, I feel I will start this project from scratch using Django instead. The robust features like user profiles, interactions, and database maintenance would be much easier to handle with Django instead of Flask.',
    'geometry': 'The Geometry Calculator is a command line application that calculates the area and perimeter of basic geometric shapes like rectangles, triangles, and circles. This was a project that I made in school when I took Java courses. The assignment was to create a program that would prompt the user for length and width and return the area of a rectangle. I decided to expand upon that idea and make a full calculator for different shapes and equations. This can also be heavily expanded upon with the knowledge I have now.',
    'ctphome': 'CTP Home is an internal web application for generating reports and data for my previous job, Connecting the Pieces. It was built using Python and SQL for the backend and HTML, CSS, and Javascript for the frontend. This site is still in use at Connecting the Pieces, mainly for its reporting capabilities, but I built a lot more into it. The front page has a company news board, notfication board, and an open speech area for employees to communicate, ask questions, or just chat with their coworkers via post/comment style interactions. The report generator is the meat of the application where custom reports were tailor made for each department\'s needs and are used frequently for billing, appointment matching, and company-wide analytics. Over the course of building this application, I tried to make as many parts as I could from scratch to learn more about how it all works and fits together. I know there are easier ways to do things like user authentication, but I wanted to try to handle it myself. This was an amazing learning experience and I have taken a lot away from it.',
    'luca': 'Luca\'s Adventure is a small 2D sidescroller game built with Python Pygame for my son. It features simple gameplay mechanics and charming visuals. When My son was born, I decided I would try to make a game for him to play when he got older. Work and other projects got in the way, but I still have a lot of time to finish it before he can play it. The game itself is pretty simple and straightforward (it\'s for a child). I included a map maker program with it as well to make custom maps using JSON objects to save the tile types and generate them in game.'
}

function showDetails(projectId) {
    let details = '';
    const titleElement = document.getElementById('details-title');
    switch(projectId) {
        case 'polygonia':
            details = 'Polygonia is a rogue-like game built using Python and the Pygame library. Explore procedurally generated dungeons, collect items, and battle enemies in this exciting adventure.';
            titleElement.textContent = 'Polygonia';
            break;
        case 'anassa':
            details = 'Anassa is an E-Commerce website built with the Django framework. It features a responsive design, user authentication, and a product catalog.';
            titleElement.textContent = 'Anassa';
            break;
        case 'bagaje':
            details = 'Bagaje is a social media-esque web application being built with Flask and MongoDB. It allows users to create posts, follow other users, and interact with content.';
            titleElement.textContent = 'Bagaje';
            break;
        case 'geometry':
            details = 'The Geometry Calculator is a command line application that calculates the area and perimeter of basic geometric shapes like rectangles, triangles, and circles.';
            titleElement.textContent = 'Geometry Calculator';
            break;
        case 'ctphome':
            details = 'CTP Home is an internal web application for generating reports and data for my previous job, Connecting the Pieces. It was built using Python and Django.';
            titleElement.textContent = 'CTP Home';
            break;
        case 'luca':
            details = 'Luca\'s Adventure is a small 2D sidescroller game built with Python Pygame for my son. It features simple gameplay mechanics and charming visuals.';
            titleElement.textContent = 'Luca\'s Adventure';
            break;
        default:
            details = 'Polygonia is a rogue-like game built using Python and the Pygame library. Explore procedurally generated dungeons, collect items, and battle enemies in this exciting adventure.';
            titleElement.textContent = 'Polygonia';
            break;
    }
    const imageElement = document.getElementById('details-image');
    const descElement = document.getElementById('details-desc');

    imageElement.src = `${projectId}.png`;
    descElement.textContent = descriptions[projectId];
}

document.getElementById('polygonia').addEventListener('click', () => {
    showDetails('polygonia');
    detailsWindow.style.display = 'block';
});

document.getElementById('anassa').addEventListener('click', () => {
    showDetails('anassa');
    detailsWindow.style.display = 'block';
});

document.getElementById('bagaje').addEventListener('click', () => {
    showDetails('bagaje');
    detailsWindow.style.display = 'block';
});

document.getElementById('geometry').addEventListener('click', () => {
    showDetails('geometry');
    detailsWindow.style.display = 'block';
});

document.getElementById('ctphome').addEventListener('click', () => {
    showDetails('ctphome');
    detailsWindow.style.display = 'block';
});

document.getElementById('luca').addEventListener('click', () => {
    showDetails('luca');
    detailsWindow.style.display = 'block';
});