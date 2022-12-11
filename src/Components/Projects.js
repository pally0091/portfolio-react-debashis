import React from 'react';
import Project from './Project';

const Projects = () => {
    const projects =[
        {
            name :'Country',
            photo : 'https://i.ibb.co/Qkz6MhS/Country.png',
            technologies : 'ReactJS, HTML, CSS, RestAPI, tailwind',
            description : 'This site can only show us a little details about all countries.' ,
            site :  'https://countries-info-esa.netlify.app/'
        },
        {
            name :'ABCD Restaurant',
            photo : 'https://i.ibb.co/TBvszw9/ABCDResturant.png',
            technologies : 'ReactJS, HTML, CSS, API, Tailwind', 
            description : 'The site can show you the meals category & By cliking Categories you will get all foods from that category, by clicking details you will get recipes.',
            site: 'https://recipe-hunt-esa.netlify.app/'
        },
        {
            name : 'Digital Hut',
            photo : 'https://i.ibb.co/sR0Jqtm/Digital-Hut.png',
            technologies : 'ReactJS, HTML, CSS, API, Tailwind', 
            description : 'Site for online market. Products will load on page by their categories' ,
            site : 'https://digital-hut.netlify.app/'
        }
    ]
    return (
        <div className='bg-black p-5'>
            {
                projects.map(project => <Project
                    keyword={project.name}
                    project={project}
                ></Project>)
            }
        </div>
    );
};

export default Projects;