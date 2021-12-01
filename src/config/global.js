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
        titulo: 'Generalidades sobre logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La logística',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Mercancías, tipos de mercancías, naturaleza y características',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Medios de transporte, clasificación de vehículos de carga y características',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Simbología de manejo de carga, definición, significado, usos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normativa de transporte de carga y manipulación de alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Dimensiones de transporte de carga. Artículo 7 Resolución 4100 de 2015',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normativa transporte de alimentos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estado de mercancías',
        desarrolloContenidos: true,
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
        'Decreto 410 de 1971. [Presidencia de la república]. Por el cual se expide el Código de Comercio. Marzo 27 de 1971. ',
      link:
        'Https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=54030',
    },
    {
      referencia:
        'Ministerio de transporte. (2018). Transporte en cifras: Estadísticas 2018. Obtenido de:',
      link: 'https://mintransporte.gov.co/',
    },
    {
      referencia:
        'Mora García, L. A. (2016). Gestión Logística Integral Las Mejores Prácticas en la Cadena de Abastecimiento. Ecoe Ediciones. ',
    },
    {
      referencia:
        'Resolución 2674 de 2013. [Ministerio de Salud]. Por la cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones. 25 de julio de 2013. ',
    },
    {
      referencia:
        'Resolución 4100 [Ministerio de transporte]. Por la cual se adoptan los límites de pesos y dimensiones en los vehículos de transporte terrestre automotor de carga por carretera, para su operación normal en la red vial a nivel nacional. 28 de diciembre 12 de 2004. ',
      link:
        'https://web.mintransporte.gov.co/jspui/bitstream/001/4012/1/Resolucion_4100_2004.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abastecimiento',
      significado: 'Garantizar el flujo oportuno de productos.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Depositar o conservar un producto en un lugar determinado o definido',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona o personas que adquieren productos de forma frecuente.',
    },
    {
      termino: 'Contaminar',
      significado:
        'Depositar en un elemento una sustancia que es perjudicial para la salud de los seres vivos.',
    },
    {
      termino: 'Contrato',
      significado:
        'Documento por el cual se establece un acuerdo en el que dos o más partes se comprometen al cumplir un acuerdo.',
    },
    {
      termino: 'Custodia',
      significado:
        'Es la protección que se brinda a las mercancías durante el traslado estando a cargo del transportador.',
    },
    {
      termino: 'Divergencia',
      significado:
        'Desacuerdo entre dos o más personas sobre un asunto específico.',
    },
    {
      termino: 'Economía',
      significado:
        'Ciencia encargada estudiar la producción, distribución y consumo de bienes y servicios que están dirigidos a satisfacer necesidades de los seres humanos',
    },
    {
      termino: 'Frágil',
      significado:
        'Elemento que puede deteriorarse o romperse con gran facilidad.',
    },
    {
      termino: 'Logística',
      significado: 'Medios dispuestos para realizar una actividad específica.',
    },
    {
      termino: 'Proliferar',
      significado:
        'La reproducción de forma rápida de organismos vivos en las células.',
    },
    {
      termino: 'Producto',
      significado: 'Efecto o resultado de un trabajo.',
    },
    {
      termino: 'Reglamentación',
      significado:
        'Conjunto de normas que definen las acciones o reglas para una actividad.',
    },
  ],
  complementario: [
    {
      texto:
        'Decreto 410 de 1971. [Presidencia de la república]. Por el cual se expide el Código de Comercio. Marzo 27 de 1971.',
      tipo: 'Página Web',
      link: 'https://co.biblioteca.legal/codigo-comercio/contrato-transporte',
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
        nombre: 'Gloria Liliana García Marín',
        cargo: 'Experta Temática',
        centro: 'Centro de la Industrial y los servicios - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
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
        nombre: 'Oscar Marquez Sanabria',
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
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
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
