# Contador_app

Aplicacion de pruebas usando React Native para el curso de aplicaciones moviles 2023


Entregas por medio de Pull Requests - Crear un README_TU_NOMBRE.md en caso de agregar teoria - En codigo solo modifica el original con tu version. 

## Test 
- [ ] Test #0: Fix errors in the initial project    
= [ ] Test #1: Setup the environment and run the app in your phone - send printscreen for whatsapp add your name to the msg
- [ ] Test #2: Create a issue for a new feature or bug that you understand the app need it   
- [ ] Test #3: Documenta que representa cada uno de los archivos en esta app - investigacion
- [ ] Test #4: Identifica los custom hooks usados en este app


## Investigación en la etapa 1

* _Cambios en el State:_
Se refieren a las actualizaciones de datos almacenados en el estado de un componente. Se realizan utilizando la función setState(), que está disponible en los componentes basados en clases y en los componentes funcionales mediante el uso de los hooks, como useState().

* _Contador:_
Se implementa utilizando el state en React, ya sea a través de la clase Component en componentes basados en clases o mediante el uso del hook useState en componentes funcionales. Cada vez que se realiza un cambio en el valor del contador mediante setContador, React se encarga de actualizar automáticamente la interfaz de usuario para mostrar el nuevo valor del contador.

* _Re-utilización de componentes:_
Permite crear componentes independientes y modularizados, los cuales pueden ser utilizados en múltiples partes de una aplicación. En esta app, se reutiliza el componente Fab para aumentar y decrementar el contador.

* _Pantallas:_
Son componentes que representan las diferentes vistas o páginas de una aplicación. Cada pantalla en React generalmente se representa por medio de un componente específico que define la estructura, estado y el contenido de dicha pantalla. En esta app, existen dos pantallas, la cuales son: “ContadorScreen” y “HolaMundoScreen”.

* _Componentes personalizados:_
Se crean mediante funciones o clases que extienden la clase Component. Estos componentes encapsulan una funcionalidad específica y pueden aceptar props (propiedades) como argumentos para personalizar su comportamiento y apariencia. En esta app, tenemos el componente personalizado “Fab”.

* _Stylesheet:_
Es un archivo o un objeto que contiene estilos CSS que se aplican a los componentes de la aplicación. Se utilizan para definir la apariencia y el diseño de los elementos de la interfaz de usuario.

* _Envío de argumentos a componentes:_
Se refiere a pasar valores o datos a un componente para que pueda utilizarlos en su lógica o para personalizar su renderizado. Los argumentos se pasan a través de props (propiedades) en React.

* _Tipando props:_
Ayuda a evitar errores y mejorar la calidad del código. Proporciona información sobre los tipos de datos esperados y hace que el código sea más legible y mantenible.

### Componentes como:

* `View` Es la capa de presentación o interfaz de usuario, que generalmente está compuesta por componentes que renderizan y representan visualmente los datos y el estado de una aplicación.

* `Text` Es utilizado para almacenar y transmitir datos en forma de palabras, frases, párrafos u otros formatos de texto estructurado.

* `TouchableOpacity` Es utilizado para hacer que los botones y otros elementos interactivos de la interfaz de usuario sean más accesibles y proporcionen una experiencia táctil agradable.

* `TouchableNativeFeedback` Permite agregar interacción táctil a los elementos de la interfaz de usuario en dispositivos Android. No está disponible para su uso en dispositivos iOS.

* `TouchableWithoutFeedback` Permite agregar interacción táctil a los elementos de la interfaz de usuario en dispositivos tanto Android como iOS. Así mismo, no proporciona ningún efecto visual o de retroalimentación táctil cuando se toca el componente envuelto. 

El objetivo propiamente, es adentrarnos en nuestras primeras experiencias con React Native para crear una aplicación simple que nos de la noción de cómo trabajar en este framework, pero a la vez, dejarnos con la intriga de todo lo que estamos a punto de aprender :)