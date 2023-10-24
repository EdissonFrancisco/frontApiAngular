# frontApiAngular
uso de angular para crear font de api de videos y comentarios, listo los videos que trae el api y muestro una lista 
es uso basico

separo el llamdo del api en servicios/api
separo las vistas en su respectiva carpeta
las rutas las manejo en el archivo src/app/app-routing.module.ts
  donde exporto un array de las rutas export const routingComponents = 
  [DashboardComponent,CrearComponent,ActualizarComponent]
y en app.modules importo el array para facilitar su uso

de esta forma se hace mas sencillo todo su uso 
