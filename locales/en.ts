import { PROJECTS_DATA, TECHNOLOGIES } from '@/lib/constants';

export const en = {
  constructionLabel: 'Project under construction',
  metaTags: {
    description: 'Web apps developer'
  },
  navBar: {
    home: 'Home',
    myProjects: 'Projects',
    about: 'About',
    contact: 'Contact'
  },
  indexPage: {
    hero: {
      title: "I'm Mario",
      subtitle: ['Software Developer'],
      description: [
        'Passionate about technology and growing businesses',
        'Always improving my skills to make the website of your dreams come true'
      ]
    },
    about: {
      title: 'About Me',
      description: [
        "I'm a self-taught software developer who loves to learn new things and be improving every day",
        'Currently focused on web development working with React, Next.js and Tailwindcss, in fact this website is built with these technologies',
        'I also have experience with Node.js, Python with Flask, and MongoDB using the official driver for Node.js'
      ],
      buttonLabel: 'More about me'
    },
    projects: {
      title: 'My Projects',
      description: 'These are some of my projects',
      projectsData: [
        {
          title: PROJECTS_DATA.markdownPreviewer.title,
          description: [
            'In this project you can type Markdown code and get as a result the Preview and HTML code that you can copy to your clipboard with just a click'
          ],
          image: PROJECTS_DATA.markdownPreviewer.images.desktop,
          title2: 'Technologies I Used',
          technologies: [
            TECHNOLOGIES.html,
            TECHNOLOGIES.css,
            TECHNOLOGIES.javascript,
            TECHNOLOGIES.react,
            TECHNOLOGIES.propTypes,
            TECHNOLOGIES.dompurify,
            TECHNOLOGIES.marked,
            TECHNOLOGIES.vite
          ],
          links: [
            {
              label: 'Code',
              href: PROJECTS_DATA.markdownPreviewer.links.sourceCode
            },
            {
              label: 'Demo',
              href: PROJECTS_DATA.markdownPreviewer.links.liveDemo
            }
          ]
        },
        {
          title: PROJECTS_DATA.randomQuoteMachine.title,

          description: [
            'This is a project where you can get a Random Quote clicking a "New Quote" button and tweet it if you want with just a click on the Twitter icon'
          ],
          image: PROJECTS_DATA.randomQuoteMachine.images.desktop,
          title2: 'Technologies I Used',
          technologies: [
            TECHNOLOGIES.html,
            TECHNOLOGIES.css,
            TECHNOLOGIES.javascript,
            TECHNOLOGIES.react,
            TECHNOLOGIES.vite
          ],
          links: [
            {
              label: 'Code',
              href: PROJECTS_DATA.randomQuoteMachine.links.sourceCode
            },
            {
              label: 'Demo',
              href: PROJECTS_DATA.randomQuoteMachine.links.liveDemo
            }
          ]
        }
      ],
      buttonLabel: 'See all projects'
    },
    contact: {
      title: 'Contact Me',
      description: 'Find me on the following platforms',
      paragraph: 'Or send me an email',
      buttonLabel: 'Send email'
    }
  }
};
