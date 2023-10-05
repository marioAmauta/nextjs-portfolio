import { PROJECTS_DATA, TECHNOLOGIES } from '@/lib/constants';

export const es = {
  madeWithLove: 'Hecho con ❤️ por Mario Programador',
  contactForm: {
    title: 'Envíame un mensaje',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    email: 'Correo electrónico',
    emailPlaceholder: 'hola@hola.com',
    message: 'Mensaje',
    messagePlaceholder: '¡Hola Mario! Me gustaría hablar contigo sobre...',
    submit: 'Enviar Mensaje',
    success: 'Mensaje enviado con éxito!  ',
    error: 'Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.',
    close: 'Cerrar'
  },
  metaTags: {
    description:
      'Construyo sitios web utilizando tecnologías modernas para ofrecer excelentes interacciones con el usuario y fomentar un crecimiento empresarial continuo, siempre esforzándome por brindar la mejor experiencia.'
  },
  navBar: {
    home: 'Inicio',
    about: 'Sobre Mí',
    myProjects: 'Proyectos',
    contact: 'Contacto'
  },
  indexPage: {
    hero: {
      title: 'Soy Mario',
      subtitle: 'Desarrollador de Software',
      description: [
        'Apasionado por la tecnología.',
        'Siempre mejorando mis habilidades para hacer realidad el sitio web de tus sueños.'
      ]
    },
    about: {
      title: 'Sobre Mí',
      description: [
        'Soy un desarrollador de software autodidacta que ama aprender cosas nuevas y se esfuerza por mejorar cada día.',
        'Actualmente, estoy enfocado en el desarrollo web, trabajando con React, Next.js y Tailwind CSS. De hecho, este sitio web está construido utilizando estas tecnologías.',
        'También tengo experiencia con Node.js, Python (con Flask) y MongoDB.'
      ],
      buttonLabel: 'Más sobre mí'
    },
    projects: {
      title: 'Mis Proyectos',
      description: ['Estos son algunos de mis proyectos'],
      projectsData: [
        {
          title: PROJECTS_DATA.markdownPreviewer.title,
          description: [
            'En este proyecto, puedes ingresar código Markdown y recibir al instante tanto una vista previa como el código HTML, que puedes copiar fácilmente a tu portapapeles con un solo clic.'
          ],
          image: PROJECTS_DATA.markdownPreviewer.images.desktop,
          title2: 'Tecnologías que Usé',
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
            "Este es un proyecto en el que puedes obtener una cita al azar haciendo clic en el botón 'New Quote' y compartirla fácilmente en Twitter con solo un clic en el icono de Twitter."
          ],
          image: PROJECTS_DATA.randomQuoteMachine.images.desktop,
          title2: 'Tecnologías que Usé',
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
      buttonLabel: 'Ver más proyectos'
    },
    contact: {
      title: 'Contacto',
      description: 'Encuéntrame en las siguientes plataformas',
      paragraph: 'Envíame un mensaje',
      buttonLabel: 'Enviar mensaje'
    }
  },
  aboutPage: {
    title: 'Sobre Mí',
    subtitle1: 'Mi travesía como desarrollador',
    paragraphs1: [
      'En mis primeros días, comencé a aprender sobre el desarrollo web en 2021, comenzando con HTML, CSS y JavaScript. Usé aplicaciones móviles y leí artículos sobre desarrollo web. También vi videos en YouTube. Aprendí mucho de estos recursos, pero quería aprender más, así que comencé a buscar cursos.',
      'Descubrí freeCodeCamp, una plataforma increíble para aprender desarrollo web. Comencé con la Certificación de Diseño Web Responsivo, luego avancé a la Certificación de Algoritmos y Estructuras de Datos de JavaScript. Actualmente, estoy trabajando en la Certificación de Bibliotecas de Desarrollo Frontend.',
      'Sin embargo, también quería expandir mi conocimiento, así que comencé a explorar frameworks para abordar proyectos más complejos. Opté por Next.js para React, y en cuanto al diseño, he estado utilizando Tailwind CSS.',
      'Pero no estoy limitado a aprender solo una tecnología. De hecho, he completado un curso de Python donde aprendí cómo usar Python y sus bibliotecas, como Flask y Tkinter.'
    ],
    linkButton: 'Ver proyectos'
  },
  projectsPage: {
    title: 'Mis Proyectos',
    projectsData: [
      {
        title: PROJECTS_DATA.markdownPreviewer.title,
        description: [
          'En este proyecto, puedes ingresar código Markdown y recibir al instante tanto una vista previa como el código HTML, que puedes copiar fácilmente a tu portapapeles con un solo clic.'
        ],
        image: PROJECTS_DATA.markdownPreviewer.images.desktop,
        title2: 'Tecnologías que Usé',
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
          "Este es un proyecto en el que puedes obtener una cita al azar haciendo clic en el botón 'New Quote' y compartirla fácilmente en Twitter con solo un clic en el icono de Twitter."
        ],
        image: PROJECTS_DATA.randomQuoteMachine.images.desktop,
        title2: 'Tecnologías que Usé',
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
      },
      {
        title: PROJECTS_DATA.javaScriptDocumentation.title,
        description: [
          'Este proyecto está dedicado a la Documentación de JavaScript, dividido en secciones donde puedes encontrar información sobre este increíble lenguaje, cómo declarar variables, trabajar con diferentes tipos de datos y mucho más.'
        ],
        image: PROJECTS_DATA.javaScriptDocumentation.images.desktop,
        title2: 'Tecnologías que Usé',
        technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
        links: [
          {
            label: 'Código',
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
          'Este proyecto es una pequeña simulación de una tienda de saxofones donde puedes ver diferentes modelos de saxofones y sus respectivos precios, junto con secciones informativas sobre el negocio. Además, hay un formulario ficticio disponible para suscribirte al boletín de la tienda.'
        ],
        image: PROJECTS_DATA.theSaxophoneCorner.images.desktop,
        title2: 'Tecnologías que Usé',
        technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
        links: [
          {
            label: 'Código',
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
          'Este proyecto es un formulario de encuesta simulado diseñado para recopilar información de los usuarios. Incluye una variedad de elementos de entrada, como campos de texto, campos de correo electrónico, campos numéricos, botones de radio, casillas de verificación y un menú desplegable.'
        ],
        image: PROJECTS_DATA.surveyForm.images.desktop,
        title2: 'Tecnologías que Usé',
        technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css],
        links: [
          {
            label: 'Código',
            href: PROJECTS_DATA.surveyForm.links.sourceCode
          },
          {
            label: 'Demo',
            href: PROJECTS_DATA.surveyForm.links.liveDemo
          }
        ]
      }
    ],
    buttonLabel: 'Contacto'
  },
  contactPage: {
    title: 'Contacto',
    description: 'Encuéntrame en las siguientes plataformas'
  }
};
