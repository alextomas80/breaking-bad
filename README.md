# Breaking Bad App

Proyecto en React para la consulta de los personajes de Breaking Bad.

## ¿Cómo arrancar el proyecto?

Lo primero de todo, deberemos clonar la aplicación:

```
git clone https://github.com/alextomas80/breaking-bad.git
```

E instalar las dependencias:

```
yarn install
```

...o bien, de forma abreviada:

```
yarn
```

Una vez el proceso de instalación de dependencias podremos arrancar el proyecto con `yarn start` y consultarlo en [http://localhost:3000](http://localhost:3000).

## El proyecto

La aplicación la he realizado con **React**, dónde se gestiona el estado de la misma con la librería [Redux](https://es.redux.js.org/) y efectos de [Redux Saga](https://redux-saga.js.org/).

La maquetación hace uso de [Styled Components](https://styled-components.com/) y he aprovechado a gestionar mínimamento un aspecto aceptable para dispositivos móviles.

Para la internacionalización he usado [i18next](https://react.i18next.com/), definiendo y usando dos idiomas: español e inglés.

### Organización

- **components**: directorio de componentes que se usan a lo largo de la aplicación.
- **locales**: definición y configuración de los lenguajes utilizados (en/es)
- **pages**: páginas de la aplicación
- **redux**: gestión de la store y definición de sagas
- **test**: utilidades para testing
- **utils**: directorio para definir funciones de uso común
- **App.js**: punto de entrada de la aplicación
- **i18n.js**: configuración de i18n

### Demo

Se puede ver una demo en https://breaking-bad-ath.netlify.app/
