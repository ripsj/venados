### Versiones
Angular 6
node 12
Moesif Orign & CORS Changer 0.4

### Servidor
El servicio se encuentra disponible en la siguiente ruta:
	https://venados.netlify.com/

Es importante tener la política CORS desactivada. Para esto podemos instalar en el navegador Chrome la extension:
	Moesif Orign & CORS Changer 0.4

ubicada en la URL:
	https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en-US
 además debemos asegurarnos que la extensión se encuentra encendida y recargar la página para que esta muestre 
 los datos correspondientes.

### Archivos
El proyecto está completo en la ruta:
	bitbucket

Se incluyeron todos los archivos generados excepto node_modules.

### Breve descripción

Entrando a la aplicación es la pantalla de bienvenida. Por defecto viene limpia.
Para desplegar información debemos seleccionar la barra de navegación en la esquina
superior izquierda. En la barra estarán disponibles 3 opciones: Home, Estadísticas,
Jugadores.

En home se encuentran todos los partidos obtenidos del endpoint separados por torneo.
En estadísticas no se muestra nada ya que la respuesta del endpoint es vacía.
En jugadores se encuentran todos los jugadores y entrenadores. Podemos ver el detalle
 de cada uno haciendo click en la imagen del jugador.