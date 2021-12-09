export default {
  global: {
    componenteFormativo: 'Pruebas de rendimiento bases de datos',
    descripcionCurso:
      'Este componente explicará cómo se afina un motor de base de datos, cómo se analizan y se optimizan las consultas mejorando sus tiempos de respuesta, además explica cómo funcionan los algoritmos de búsqueda. ',
    imagenBannerPrincipal: require('@/assets/curso/Images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/Images/header/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: ' Tiempos computacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura de datos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Complejidad algorítmica',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Algoritmos de busqueda',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Índices y rendimiento en bases de datos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de rendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Preparación e identificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis de plan de ejecución de consultas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Optimización de consultas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Recomendaciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Afinamiento de bases de datos.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Motor de almacenamiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Parámetros de configuración',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas de monitoreo',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Guillermo, J. (2018). Qué es la complejidad algorítmica y con qué se come. ',
      link:
        'https://medium.com/@joseguillermo_/qu%C3%A9-es-la-complejidad-algor%C3%ADtmica-y-con-qu%C3%A9-se-come-2638e7fd9e8c',
    },
    {
      referencia: 'Laboratorio Devs (2017) Algoritmos y notación asintótica. ',
      link:
        'https://medium.com/laboratoria-developers/algoritmos-y-notaci%C3%B3n-asint%C3%B3tica-817a666ca444',
    },
    {
      referencia:
        'ochobitshacenunbyte (2020) Motores de almacenamiento en MySQL y MariaDB.',
      link:
        'https://www.ochobitshacenunbyte.com/2020/08/11/motores-de-almacenamiento-en-mysql-y-mariadb/',
    },
  ],
  glosario: [
    {
      termino: 'Array',
      significado: 'Colección de elementos y sus posiciones.',
    },
    {
      termino: 'Iterar',
      significado: 'Realizar cierta acción o acciones varias veces.',
    },
    {
      termino: 'Aplicación',
      significado:
        'Una <b>aplicación</b> es un programa <b>informático</b> diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia <b>informática</b> de las personas.',
    },
    {
      termino: 'Implementación',
      significado:
        'Poner en funcionamiento o aplicar métodos, medidas , etc., para llevar algo a cabo.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Una <b>base de datos </b>es una recopilación organizada de información o <b>datos</b> estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: 'Servidor',
      significado:
        'Un <b>servidor</b> es un conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
  ],
  complementario: [
    {
      texto:
        'Molto, G. (2011). Estructura de datos Lineales [video]. Youtube. Universitat Politecnica de Valencia',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/watch?v=-Shr2s0gYao',
    },
    {
      texto: 'Francisco, T. (2015) Explicación del método de la burbuja',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/zVjZdrh3tSA',
    },
    {
      texto: 'Chio Code (2021). Ordenamiento por selección',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/Myy-eU-SWbE',
    },
    {
      texto:
        'KhanAcademyEspañol, (2014). Algoritmo de ordenamiento por inserción',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/bB8Px8D9QdQ',
    },
    {
      texto: 'Montero, L. (2017). Algoritmos-Ordenamiento rapido- Quicksort',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/DYmTpUfcyT8',
    },
    {
      texto: 'Domínguez Gutu, J. (2020)',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/C4_kHhpY5jE',
    },
    {
      texto: 'Cerebrum (2013). Tutorial de base de datos',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/1HH4ZYXhJYE',
    },
    {
      texto:
        'Decharlas Castellon (2014). Optimización del rendimiento con Mysql',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/rsHXazV__Ec',
    },
    {
      texto: 'Mora, J. (2015). Herramientas para optimizar mysql',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/embed/WUKZ2SCuMUQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'David Eduardo Lozada Cerón',
        cargo: 'Experta temática',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Zenith Chinchilla Ruedas',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arevalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Alvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
