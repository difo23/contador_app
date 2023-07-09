## Hector Jose Aramboles Castillo - 20190821

**Investigar en la etapa 1**

- **Cambios en el State**. Para cambiar el state de la app se utiliza el Hook useState, y con la funcion setState, que en este caso seria serContador, se cambia el valor del state.

- **Contador**. El contador inicia con el valor de 10 y cada vez que se pulse un boton, se llama a la funcion setState haciendo que se incremente o decremente el valor del contador.

- **Re-utilización de componentes**. Es cuando se puede utilizar un componente en diferentes partes de la app, como por ejemplo, el componenete Fab.tsx.

- **Pantallas**. Las pantallas que tiene la app son ContadorScreen y HolaMundoScreen. ContadorScreen contiene la funcionalidad del contador y HolaMundoScreen contiene el texto Hola estudiante.

- **Componentes personalizados**. El componenete personalizado de la app es solo 1 y es Fab.tsx. El cual contiene un boton para utilizar en cualquiera de las dos pantallas de la app.

- **Stylesheet**. Es un objeto en el cual se colocan los estilos de la app.

- **Envío de argumentos a componentes**. Para enviar argumentos entre componentes se utilizan las props.

- **Tipando props**. Solo el componente Fab.tsx tiene tipado de props. Las cuales son: title, position y onPress.

- **Componentes como:** Fab.tsx.

- **View**. Viene siendo como div en html, usado para contener otros elementos.

- **Text**. Es el texto que se mostrara en pantalla.

- **TouchableOpacity**. Es un boton que al presionarlo cambia de opacidad.

- **TouchableNativeFeedback**. Es un boton que al presionarlo cambia de opacidad, pero solo funciona en android.

- **TouchableWithoutFeedback**. Es un boton que al presionarlo no cambia de opacidad.