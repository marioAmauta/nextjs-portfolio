import { PROJECTS_DATA, TECHNOLOGIES } from '@/lib/constants'

export const en = {
  madeWithLove: 'Made with ❤️ by Mario Programador',
  contactForm: {
    title: 'Send me a Message',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'hello@hello.com',
    message: 'Message',
    messagePlaceholder: 'Hello Mario! I would like to talk to you about...',
    submit: 'Send Message',
    success: 'Message sent successfully!',
    error: 'An error occurred while sending the message. Please try again later.',
    close: 'Close'
  },
  metaTags: {
    description:
      'I build websites using modern technologies to provide excellent user interactions and facilitate continuous business growth, always striving to deliver the best experience.'
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
      subtitle: 'Software Developer',
      description: [
        'Passionate about technology.',
        'Always improving my skills to make the website of your dreams come true.'
      ]
    },
    about: {
      title: 'About Me',
      description: [
        "I'm a self-taught software developer who loves learning new things and strives to improve every day.",
        'Currently, I am focused on web development, working with React, Next.js, and Tailwind CSS. In fact, this website is built using these technologies.',
        'I also have experience with Node.js, TypeScript, Python, and MongoDB.'
      ],
      buttonLabel: 'More about me'
    },
    projects: {
      title: 'My Projects',
      description: 'These are some of my projects',
      projectsData: [
        {
          title: PROJECTS_DATA.pomodoroTimer.title,
          description: [
            'This project is a Pomodoro timer that you can use to improve your productivity. You can set the timer to work in sessions of 25 minutes with 5-minute breaks, or you can customize it to fit your needs.'
          ],
          image: PROJECTS_DATA.pomodoroTimer.images.desktop,
          title2: 'Technologies I Used',
          technologies: [
            TECHNOLOGIES.html,
            TECHNOLOGIES.tailwindcss,
            TECHNOLOGIES.heroicons,
            TECHNOLOGIES.javascript,
            TECHNOLOGIES.react,
            TECHNOLOGIES.propTypes,
            TECHNOLOGIES.vite
          ],
          links: [
            {
              label: 'Code',
              href: PROJECTS_DATA.pomodoroTimer.links.sourceCode
            },
            {
              label: 'Demo',
              href: PROJECTS_DATA.pomodoroTimer.links.liveDemo
            }
          ]
        },
        {
          title: PROJECTS_DATA.markdownPreviewer.title,
          description: [
            'In this project, you can input Markdown code and instantly receive both a Preview and HTML code, which you can easily copy to your clipboard with a single click.'
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
        }
      ],
      buttonLabel: 'See more projects'
    },
    contact: {
      title: 'Contact Me',
      description: 'Find me on the following platforms',
      paragraph: 'Send me a message',
      buttonLabel: 'Send message'
    }
  },
  aboutPage: {
    title: 'About Me',
    subtitle1: 'My Dev Journey',
    paragraphs1: [
      'In my early days, I started learning about web development in 2021, beginning with HTML, CSS, and JavaScript. I used mobile apps and read articles about web development. I also watched videos on YouTube. I learned a lot from these resources, but I wanted to learn more, so I started looking for courses.',
      "I discovered freeCodeCamp, an amazing platform for learning web development. I began with the Responsive Web Design Certification, then progressed to the JavaScript Algorithms and Data Structures Certification. Currently, I'm working on the Front End Development Libraries Certification.",
      "However, I also wanted to expand my knowledge, so I began exploring frameworks to tackle more complex projects. I opted for Next.js for React, and for styling, I've been using Tailwind CSS.",
      'But I am not limited to learning just one technology. In fact, I have completed a Python course where I learned how to use Python and its libraries, such as Flask and Tkinter.'
    ],
    linkButton: 'See projects'
  },
  projectsPage: {
    title: 'My Projects',
    projectsData: [
      {
        title: PROJECTS_DATA.calculator.title,
        description: [
          "Calculator built with React, using the mathematical library 'math-expression-evaluator,' applying the logic of formulas/expressions through one of React's hooks, 'useReducer,' and verifying its functionality with the testing library 'Cypress'."
        ],
        image: PROJECTS_DATA.calculator.images.desktop,
        title2: 'Technologies I Used',
        technologies: [
          TECHNOLOGIES.html,
          TECHNOLOGIES.css,
          TECHNOLOGIES.javascript,
          TECHNOLOGIES.react,
          TECHNOLOGIES.mathExpressionEvaluator,
          TECHNOLOGIES.propTypes,
          TECHNOLOGIES.vite,
          TECHNOLOGIES.cypress
        ],
        links: [
          {
            label: 'Code',
            href: PROJECTS_DATA.calculator.links.sourceCode
          },
          {
            label: 'Demo',
            href: PROJECTS_DATA.calculator.links.liveDemo
          }
        ]
      },
      {
        title: PROJECTS_DATA.randomQuoteMachine.title,
        description: [
          "This is a project where you can obtain a random quote by clicking the 'New Quote' button and easily share it on Twitter with just one click on the Twitter icon."
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
      },
      {
        title: PROJECTS_DATA.javaScriptDocumentation.title,
        description: [
          'This project is dedicated to JavaScript Documentation, divided into sections where you can find information about this amazing language, how to declare variables, work with different data types, and much more.'
        ],
        image: PROJECTS_DATA.javaScriptDocumentation.images.desktop,
        title2: 'Technologies I Used',
        technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
        links: [
          {
            label: 'Code',
            href: PROJECTS_DATA.javaScriptDocumentation.links.sourceCode
          },
          {
            label: 'Demo',
            href: PROJECTS_DATA.javaScriptDocumentation.links.liveDemo
          }
        ]
      },
      {
        title: PROJECTS_DATA.theSaxophoneCorner.title,
        description: [
          "This project is a small simulation of a Saxophone Store where you can view various Saxophone models and their respective prices, along with informative sections about the business. Additionally, there's a fictitious form available for subscribing to the store's newsletter."
        ],
        image: PROJECTS_DATA.theSaxophoneCorner.images.desktop,
        title2: 'Technologies I Used',
        technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
        links: [
          {
            label: 'Code',
            href: PROJECTS_DATA.theSaxophoneCorner.links.sourceCode
          },
          {
            label: 'Demo',
            href: PROJECTS_DATA.theSaxophoneCorner.links.liveDemo
          }
        ]
      },
      {
        title: PROJECTS_DATA.surveyForm.title,
        description: [
          'This project is a simulated survey form designed to gather information from users. It incorporates a variety of input elements, including text fields, email fields, numeric fields, radio buttons, checkboxes, and a dropdown menu.'
        ],
        image: PROJECTS_DATA.surveyForm.images.desktop,
        title2: 'Technologies I Used',
        technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css],
        links: [
          {
            label: 'Code',
            href: PROJECTS_DATA.surveyForm.links.sourceCode
          },
          {
            label: 'Demo',
            href: PROJECTS_DATA.surveyForm.links.liveDemo
          }
        ]
      },
      {
        title: PROJECTS_DATA.markdownPreviewer.title,
        description: [
          'In this project, you can input Markdown code and instantly receive both a Preview and HTML code, which you can easily copy to your clipboard with a single click.'
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
        title: PROJECTS_DATA.pomodoroTimer.title,
        description: [
          'This project is a Pomodoro timer that you can use to improve your productivity. You can set the timer to work in sessions of 25 minutes with 5-minute breaks, or you can customize it to fit your needs.'
        ],
        image: PROJECTS_DATA.pomodoroTimer.images.desktop,
        title2: 'Technologies I Used',
        technologies: [
          TECHNOLOGIES.html,
          TECHNOLOGIES.tailwindcss,
          TECHNOLOGIES.heroicons,
          TECHNOLOGIES.javascript,
          TECHNOLOGIES.react,
          TECHNOLOGIES.propTypes,
          TECHNOLOGIES.vite
        ],
        links: [
          {
            label: 'Code',
            href: PROJECTS_DATA.pomodoroTimer.links.sourceCode
          },
          {
            label: 'Demo',
            href: PROJECTS_DATA.pomodoroTimer.links.liveDemo
          }
        ]
      }
    ],
    buttonLabel: 'Contact Me'
  }
}
