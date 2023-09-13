import { PROJECTS_DATA, TECHNOLOGIES } from '@/lib/constants';

export const es = {
  constructionLabel: 'Sitio web en construcción',
  metaTags: {
    description: 'Desarrollador de aplicaciones web'
  },
  indexPage: {
    hero: {
      title: 'Soy Mario',
      subtitle: ['Desarrollador de Software'],
      description: [
        'Apasionado de la tecnología y de hacer crecer negocios',
        'Siempre mejorando mis habilidades para hacer realidad el sitio web de tus sueños'
      ]
    },
    about: {
      title: 'Sobre Mi',
      description: [
        'Soy un desarrollador de software autodidacta que ama aprender cosas nuevas y estar mejorando cada día',
        'Actualmente enfocado en desarrollo web trabajando con React, Next.js y Tailwindcss, de hecho este sitio web está construido con estas tecnologías.',
        'También tengo experiencia con Node.js, Python con Flask, y MongoDB usando el driver oficial para Node.js'
      ],
      buttonLabel: 'Mas sobre mi'
    },
    projects: {
      title: 'Mis Proyectos',
      description: ['Estos son algunos de mis proyectos'],
      projectsData: [
        {
          title: PROJECTS_DATA.markdownPreviewer.title,

          description: [
            'En este proyecto puedes escribir código Markdown y obtener como resultado la Vista previa y el código HTML que puedes copiar a tu portapapeles con solo un clic'
          ],
          image: PROJECTS_DATA.markdownPreviewer.images.desktop,
          title2: 'Tecnologías que usé',
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
              label: 'Código',
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
            'Este es un proyecto donde puedes obtener una Cita aleatoria haciendo clic en el botón "New Quote" y Twittearla si lo deseas con solo hacer clic en el ícono de Twitter'
          ],
          image: PROJECTS_DATA.randomQuoteMachine.images.desktop,
          title2: 'Tecnologías que usé',
          technologies: [
            TECHNOLOGIES.html,
            TECHNOLOGIES.css,
            TECHNOLOGIES.javascript,
            TECHNOLOGIES.react,
            TECHNOLOGIES.vite
          ],
          links: [
            {
              label: 'Código',
              href: PROJECTS_DATA.randomQuoteMachine.links.sourceCode
            },
            {
              label: 'Demo',
              href: PROJECTS_DATA.randomQuoteMachine.links.liveDemo
            }
          ]
        }
      ],
      buttonLabel: 'Ver todos los proyectos'
    },
    contact: {
      title: 'Contacto',
      description: 'Encuentrame en las siguientes plataformas',
      paragraph: 'O envíame un correo',
      buttonLabel: 'Enviar correo '
    }
  },
  navBar: {
    home: 'Inicio',
    about: 'Sobre Mi',
    myProjects: 'Proyectos',
    contact: 'Contacto'
  },
  languageLabel: 'Idioma',
  languageSelect: {
    en: 'Inglés',
    es: 'Español'
  },
  themeLabel: 'Tema',
  themeSelect: {
    system: 'Sistema',
    light: 'Claro',
    dark: 'Oscuro'
  }
};
