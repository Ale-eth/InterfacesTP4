*******************************************************************************************************************************************************************************************************************************************************************************

Estructura del proyecto:

interfacesTP4/
│
├── index.html              # Pagina
│
├── assets/                 # Carpeta para recursos
│   ├── css/                # Archivos CSS
│   │   ├── main.css        # Estilos globales
│   │   ├── animations.css  # Animaciones
│   │   └── styles.css      # Estilos especificos
│   │
│   ├── js/                 # Scripts JavaScript para funcionalidades y efectos
│   │   ├── main.js         # Script principal para inicialización de eventos
│   │   ├── parallax.js     # Código para los efectos parallax
│   │   ├── animations.js   # JavaScript para las animaciones específicas
│   │   ├── menu.js         # Script para el menú hamburguesa y animación de ítems
│   │   └── sections/       # Scripts específicos por sección
│   │       ├── hero.js
│   │       ├── app-section.js
│   │       └── footer.js
│   │       
│   ├── images/             # Carpeta de imágenes
│   ├── gifs/               # Archivos GIF para personajes en el pre-footer
│   ├── models/             # Archivos para modelos 3D
│   └── spritesheets/       # Spritesheets para animaciones cerca del footer
│
└── README.md               # Consignas TP4


*******************************************************************************************************************************************************************************************************************************************************************************

TP4 INTERFACES: https://docs.google.com/document/u/0/d/1pRuBXaDWRg_NfdF_05VyMXKgSbWKTFt6_VhtdWhnNwo/mobilebasic

FIGMA: https://www.google.com/url?q=https://www.google.com/url?q%3Dhttps://www.figma.com/design/xoy26IpOV0V3YMbWeeRC0e/Untitled?node-id%253D1-5%2526node-type%253Dframe%2526t%253DOuJBwFJ0VqAlQ4Zc-0%26amp;sa%3DD%26amp;source%3Deditors%26amp;ust%3D1730942622922341%26amp;usg%3DAOvVaw3kpdcTTcJVlUsPcWH5wVvb&sa=D&source=docs&ust=1730942622935920&usg=AOvVaw2FFrVgPjBrcFlSoNbplcF7

GH-PAGES: https://ale-eth.github.io/InterfacesTP4/index.html

Factor de escala para adaptar elementos de 1280px a 1080px: 0.84375


*******************************************************************************************************************************************************************************************************************************************************************************

Requisitos:

- Ancho de la pantalla: 1080px

1- Loader [OPCIONAL]

2- Menu hamburguesa: 
    - Transformar 3 lineas en cruz. 
    - Con animacion keyframe
    - Desplegar minimo 3 opciones
    - Aparecer desde un costado de la pantalla

3- Al hacer scroll:
    - Header sticky y achicarse, incluido el logo.
    - (De ser necesario, cambiar el fondo a un color plano. Recomendado)

4- Hero:
    - Efecto parallax
    - Usar las capas de la composicion de la imagen que estan en Figma.
        - Mover las capas en distintas velocidades para efecto profundidad.
    - Animar tambien la entrada de las capas.

5- Seccion "La app mas divertida y educativa para niños de 3 años":
    - Mover a diferentes velocidades los personajes, el texto y el marco de fotos.
    - A medida que se scrollea por la pantalla, deben ir desplazandose los objetos en funcion a la posicion de scroll.
    - Recomencacion: ser SUTIL con los desplazamientos

6- En la misma seccion:
    - Las imagenes deben cambiar cada 3 seg.
    - (Las imagenes estan dentro del Figma)

7- En la misma seccion:
    - Las 3 cards de abajo:
        - Tienen que aparecer desde abajo hacia arriba con efecto de flotado.
        - Tienen que aparecer a destiempo (CardA 1s - CardB 0.7s - CardC 0.4s por ejemplo con 0.3s de diferencia)

8- En la seccion "Descubre el juego que convierte las Matematicas en diversion"
    - La imagen con los NumberBlocks debe moverse sutilmente en la direccion opuesta a la que se mueve el mouse

9- En la seccion "Mas amigos, mas diversion!"
    - Debe tener 2 columnas:
        - Izquierda:
            - Imagen que va cambiando (imagenes en Figma) con transicion sutil y combinada (ej: zoom y cambio de opacidad)
            - Sticky, y va cambiando con transicion suave a medida que se prolonga el texto de la derecha.
        - Derecha:
            - Texto descriptivo que avanza a velocidad normal segun el scroll. (ej:  https://growproexperience.com/ (Te acompañamos en tu viaje de principio a fin))

10- En la seccion "Mira el video y descubre el sorprendente mundo de los NumberBlocks!: Una nueva aventura matematica inmersiva!":
    - Debe haber un video (esta en Figma).
    - Ademas, el video y el personaje deben desplazarse a distinta velocidad.

11- Objeto 3D: [OPCIONAL]

12- En la seccion grilla de colores:
    - Al pasar por sobre uno de los personajes, este debe agrandarse sutilmente e iluminarse.

13- En el PRE-footer:
    - Debe crear un mini formulario sin funcionalidad (no sirve una foto).
    - Los 3 personajes de abajo deben ser GIFs y las nubes deben desplazarse en un parallax infinito.
    - Personajes: 
        - https://giphy.com/stickers/transparent-HuocoB7MEUeLMifGFN
        - https://giphy.com/stickers/NumberblocksOfficial-rainbow-lucky-seven-fuTByMqFxstXjmDSYm
        - https://giphy.com/gifs/5ddqGqO8x5rrJ7v5tf
        
14- Animar boton COMPRAR con un hover con cambio de color minimamente. (No solo hover, animaciones como las que aplicamos en el TPE3)

15- Cerca del footer:
    - Animar usando 3 spritesheet decorativos a eleccion.



Aclaraciones:
    - El tamaño 1290px de Figma corresponde al tamaño de la pantalla, hay que respetar un container de 1080px.
    - En algunas secciones quiza deba extender el color de fondo hasta cubrir el ancho de la pantalla.
    - No mobile
    - No responsive
    - En Figma estan todos los resources



*******************************************************************************************************************************************************************************************************************************************************************************

