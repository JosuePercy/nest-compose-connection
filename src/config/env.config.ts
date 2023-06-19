export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,                 /* ==> MAPEAR VARIABLES DE ENTORNO A UN OBJERTO */
  port: process.env.PORT || 3002,                    /*CONFIGURACION DE VARIABLES DE ENTORNO  */
  defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});

