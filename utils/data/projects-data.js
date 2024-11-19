import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Crest Weather Data',
        description: "I designed and developed a weather website using JavaScript, HTML, CSS, d3.js, and Python Flask to deliver real-time weather data"+
                    "visualizations to support research efforts by providing users with accessible, clear and up-to-date weather insights."+
                    "Implemented data retrieval from the Crest database with BeautifulSoup, cleaned data using SciPy, NumPy, and Pandas, and stored it in MongoDB."+
                    "Built a REST API with 15-minute updates using Axios and APScheduler. "+
                    "Additionally, initiated a React Native app leveraging the same backend with fetch API and Axios. "
                        ,
        tools: ['Web Technologies', 'd3.js', 'Flask', 'MongoDB', 'BeautifulSoup', 'Rest API', 'React Native', 'Nginx'],
        role: 'FullStack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Automate',
        description: 'Me and my team Designed a website for building custom task automation pipelines using Vite-React, SWC, and Tailwind CSS.'+
            'Then we Implemented secure route protection with Firebase and React Router DOM, leveraging user context and authentication to dynamically render user-specific content.'+
            'I developed a hierarchical workflow builder, enabling users to create customizable workflows with parent tasks and child functions (e.g., Azure user management, email automation, scheduling) that run asynchronously. '+
            'Additionally, we tested the app using Vitest, Playwright, and Jest, ensuring robust functionality through unit, integration, and end-to-end tests.'+
            'Leveraged GitHub Actions for Continuous Integration (CI) to automate test execution, manage dependencies, and generate detailed reports for coverage and test results, ensuring consistent and reliable feedback throughout development.'
            ,
        tools: ['React', 'Tailwind CSS', "Vite", "TypeScript", 'MUI', "Firebase", "NoSQL", "Playwright", "CI/CD", "Jest", "Vitest", 'EmailJS', ],
        role: 'React Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Scheduler',
        description: 'My team developed a website using React, Bootstrap, and Python Flask to automate employee work schedules for employers.'+
        'We Used Flask, Scheduler, flask_jwt_extended, blueprints, SQLite3 and OR-tools for the backend algorithms. '+
        'Then we created a responsive user interface with Bootstrap and React, and built a Python REST API to handle data exchange between the frontend and backend.'+
        'We utilized React hooks to dynamically update timetables as employees and employers input their shifts and preferences.'
        ,
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'JavaScript', 'SQLite3', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'FullStack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Pet Tinder Adoption',
        description: 'My team and I developed An app that allows users to adopt pets through a Tinder-like interface using Android Studio during a Codepath course'+
        'We outsourced Petfinder API for the list of pets up for adoption and their names, attributes and pics and used a NoSQL cloud database for user accounts.'+
        'We used fragments, RecyclerViews and Viewlayouts to make the interface with a profile page holding the pets the users want'
        ,
        tools: ['Android Studio', 'AsyncHttpClient', 'Glide', 'Parceler', "Android SDK", "Gradle"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Android Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },