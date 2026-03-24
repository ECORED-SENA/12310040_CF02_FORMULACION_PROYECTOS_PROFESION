export default {
  global: {
    Name: 'Fases y requerimientos del proyecto',
    Description:
      'Este componente orienta la estructuración de las fases del proyecto y la identificación de los requerimientos necesarios en cada etapa. Se abordan conceptos relacionados con planeación, ciclo de vida, clasificación de requerimientos y fundamentos básicos de estadística como soporte para la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentación de la estructuración del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de estructuración',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la organización secuencial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Enfoque profesional en la estructuración del proyecto',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Coherencia estructural como garantía del propósito',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Estructuración y logro del resultado',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciclo de vida del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de ciclo de vida',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Función del ciclo de vida en la estructuración',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Relación entre el ciclo de vida y la identificación de requerimientos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Importancia del ciclo de vida en el contexto profesional',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Ciclo de vida y logro del propósito del proyecto',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fases del ciclo de vida del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fase de inicio',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fase de planificación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fase de ejecución',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Fase de control',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Fase de cierre',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Requerimientos del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de requerimiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características de un requerimiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Clasificación de los requerimientos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Planeación de actividades como elementos de estructuración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Organización secuencial de actividades',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'División del proyecto en bloques',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Asignación de recursos por actividad',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Relación entre planeación y cumplimiento del propósito',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Fundamentos estadísticos para la estructuración del proyecto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Integración estructural del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Buenas prácticas en la estructuración de fases y requerimientos',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12310040_CF2_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance del proyecto',
      significado:
        'el alcance de un proyecto define claramente los objetivos, los plazos y los entregables que un proyecto debe lograr en un período determinado. Definir el alcance del proyecto con anticipación permite que los miembros del equipo puedan gestionar su tiempo individualmente. Además, los participantes clave podrán identificar cuándo surgirá algún cambio a medida que el proyecto avanza.',
    },
    {
      termino: 'Control de proyectos',
      significado:
        'es una disciplina fundamental en la gestión de proyectos, centrada en la supervisión y el control de los mismos. Incluye la planificación, el control y la gestión sistemática de recursos, costes, plazos y resultados.',
    },
    {
      termino: 'Delimitación del problema',
      significado:
        'significa determinar claramente los límites y alcances de la investigación. Para ello, se toman en cuenta diferentes aspectos, como el lugar donde se desarrollará la investigación, el tiempo que abarcará, el universo o la población que será estudiado y las circunstancias que se considerarán relevantes o no.',
    },
    {
      termino: 'Gestión de recursos',
      significado:
        'es el proceso de planificación y programación de los recursos que se necesitan utilizar en un proyecto determinado. La diferencia con la asignación de recursos radica en que aquí se planifica activamente dónde y cuándo usar los recursos que se han presupuestado para un proyecto dado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asana. (2026). 39 términos de gestión de proyectos que debes conocer. ',
      link: 'https://asana.com/es/resources/project-management-terms',
    },
    {
      referencia:
        'Bridges, J. (2025). What is the project management life cycle? ProjectManager. ',
      link:
        'https://www.projectmanager.com/blog/what-is-the-project-management-life-cycle',
    },
    {
      referencia:
        'Callejas, L. C. (2020). Gerencia de proyectos – Unidad 1. Universidad Militar Nueva Granada. ',
      link: '',
    },
    {
      referencia:
        'Estrella, C. (2024). Mejora continua: el secreto para optimizar procesos y reducir costos SoftExpert. ',
      link: 'https://blog.softexpert.com/es/mejora-continua/',
    },
    {
      referencia: 'Farias, G. (2025). Delimitación del problema. ',
      link: 'https://concepto.de/delimitacion-del-problema/',
    },
    {
      referencia:
        'Felipe Administrador. (2021). Cómo Formular un PROYECTO en 20 MINUTOS.  [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=g11b4vdNKaQ',
    },
    {
      referencia:
        'Gurnov, A. (2025). What are the phases of project management? Wrike. ',
      link:
        'https://www.wrike.com/es/project-management-guide/faq/what-are-the-phases-of-project-management/',
    },
    {
      referencia:
        'Martins, J. (2025). Cómo redactar objetivos de un proyecto que sean eficaces (incluye ejemplos). Asana. ',
      link: 'https://asana.com/es/resources/how-project-objectives',
    },
    {
      referencia:
        'Schulte, B. (2024). Project controlling: Definition, methods and key figures. PLANTA. ',
      link:
        'https://www.planta.de/en/blog/project-controlling-definition-methods-and-key-figures/',
    },
    {
      referencia:
        'Tristancho, C. (2025). Gestión de proyectos. ProjectManager. ',
      link: '',
    },
    {
      referencia:
        'Westland, J. (2025). Diagrama de flujo de un proyecto. ProjectManager. ',
      link:
        'https://www.projectmanager.com/es/diagrama-de-flujo-de-un-proyecto',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martinez Sanchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
