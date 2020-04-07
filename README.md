# Curso de RXJS

* Lo primero que debes de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podras ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, debes de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitas cambiarlo porque pueda que ese puerto lo use tu computadora, puedes cambiarlo abriendo el ```package.json``` >> scripts. Ahí verás la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambias el puerto por el que necesitas y listo. (lógicamente grabas los cambios antes de ejecutar el ```npm start``` nuevamente)


