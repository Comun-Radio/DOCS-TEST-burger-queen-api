"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[711],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>k});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),d=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=t,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,s(s({ref:a},p),{},{components:n})):r.createElement(k,s({ref:a},p))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3873:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(7462),t=(n(7294),n(3905));const o={},s="Primeros pasos con MongoDB",i={unversionedId:"GETTING-STARTED-MONGODB",id:"GETTING-STARTED-MONGODB",title:"Primeros pasos con MongoDB",description:"MongoDB es un base de datos no-relacional, y es la m\xe1s com\xfan (popular)",source:"@site/docs/GETTING-STARTED-MONGODB.md",sourceDirName:".",slug:"/GETTING-STARTED-MONGODB",permalink:"/DOCS-TEST-burger-queen-api/GETTING-STARTED-MONGODB",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Primeros pasos",permalink:"/DOCS-TEST-burger-queen-api/GETTING-STARTED-DOCKER"}},l={},d=[{value:"1. Instalar MongoDB y Compass",id:"1-instalar-mongodb-y-compass",level:2},{value:"2. Levanta la base de datos y servidor",id:"2-levanta-la-base-de-datos-y-servidor",level:2},{value:"3. Elegir m\xf3dulo (cliente)",id:"3-elegir-m\xf3dulo-cliente",level:2},{value:"Ejemplo de conexi\xf3n usando MongoDB Node Driver",id:"ejemplo-de-conexi\xf3n-usando-mongodb-node-driver",level:3},{value:"4. Definir esquemas",id:"4-definir-esquemas",level:2},{value:"5. Implementar los primeros TODOs",id:"5-implementar-los-primeros-todos",level:2},{value:"TODO 1: Conectar a la base de datos",id:"todo-1-conectar-a-la-base-de-datos",level:3},{value:"TODO 2: Crear el usuario <em>admin</em>",id:"todo-2-crear-el-usuario-admin",level:3},{value:"TODO 3: Implementar autenticaci\xf3n de usuario",id:"todo-3-implementar-autenticaci\xf3n-de-usuario",level:3},{value:"TODO 4: Implementar el middleware de autenticaci\xf3n",id:"todo-4-implementar-el-middleware-de-autenticaci\xf3n",level:3},{value:"TODO 5: Implementar la ruta GET <code>/users</code>",id:"todo-5-implementar-la-ruta-get-users",level:3},{value:"TODO 6: Implementar la ruta POST <code>/users</code>",id:"todo-6-implementar-la-ruta-post-users",level:3},{value:"6. Definir estrategia de pruebas unitarias",id:"6-definir-estrategia-de-pruebas-unitarias",level:2},{value:"7. Familiarizarte con las pruebas de integraci\xf3n (e2e)",id:"7-familiarizarte-con-las-pruebas-de-integraci\xf3n-e2e",level:2}],p={toc:d},u="wrapper";function c(e){let{components:a,...n}=e;return(0,t.kt)(u,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"primeros-pasos-con-mongodb"},"Primeros pasos con MongoDB"),(0,t.kt)("p",null,"MongoDB es un base de datos no-relacional, y es la m\xe1s ",(0,t.kt)("em",{parentName:"p"},"com\xfan")," (popular)\na d\xeda de hoy en el ecosistema de Node.js."),(0,t.kt)("p",null,"Si vas a trabajar con MongoDB y Docker, mejor lee primero\n",(0,t.kt)("a",{parentName:"p",href:"/DOCS-TEST-burger-queen-api/GETTING-STARTED-DOCKER"},(0,t.kt)("strong",{parentName:"a"},"la gu\xeda de ",(0,t.kt)("em",{parentName:"strong"},"primeros pasos con Docker"))),".\nSi vas a instalar MongoDB y desarrollar el proyecto sin\nDocker en este momento, sigue leyendo esta gu\xeda."),(0,t.kt)("p",null,"Una vez creado tu fork y clonado el repo en tu computadora, haces ",(0,t.kt)("inlineCode",{parentName:"p"},"npm install"),"\npara instalar las dependencias b\xe1sicas.\nAntes de poder comenzar a codear, tenemos que crear nuestro ",(0,t.kt)("em",{parentName:"p"},"entorno de desarrollo"),".\nPara ello te recomendamos seguir los siguientes pasos:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#1-instalar-mongodb-y-compass"},"1. Instalar MongoDB y Compass")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#2-levanta-la-base-de-datos-y-servidor"},"2. Levanta la base de datos y servidor")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#3-elegir-m%C3%B3dulo-cliente"},"3. Elegir m\xf3dulo (cliente)")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#4-definir-esquemas"},"4. Definir esquemas")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#5-implementar-los-primeros-todos"},"5. Implementar los primeros TODOs")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#6-definir-estrategia-de-pruebas-unitarias"},"6. Definir estrategia de pruebas unitarias")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#7-familiarizarte-con-las-pruebas-de-integraci%C3%B3n-e2e"},"7. Familiarizarte con las pruebas de integraci\xf3n (e2e)"))),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"1-instalar-mongodb-y-compass"},"1. Instalar MongoDB y Compass"),(0,t.kt)("p",null,"El sitio de MongoDB tiene tutoriales de c\xf3mo instalar la ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/compass/current/install/"},"Community Edition"),".\nElige tu plataforma (Windows, Mac, Ubuntu etc) y sigue ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/installation/#mongodb-installation-tutorials"},"el tutorial"),"."),(0,t.kt)("p",null,"Con los tutoriales, vas a descargar y instalar MongoDB en tu sistema,\ncon algunas herramientas y comandos para usar en la l\xednea de comando."),(0,t.kt)("p",null,"Tambi\xe9n recomendamos que instales ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/products/compass"},"Compass"),",\nque es un GUI (Graphical User Interface) para interactuar con la base de datos.\nPuedes interactuar con MongoDB sin Compass y solo en la linea de comando,\npero un GUI puede ayudarte visualizar y entender lo que est\xe1 en\nla base de datos. Sigue ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/compass/current/install/"},"las instrucciones de instalaci\xf3n de Compass"),"."),(0,t.kt)("h2",{id:"2-levanta-la-base-de-datos-y-servidor"},"2. Levanta la base de datos y servidor"),(0,t.kt)("p",null,'Podemos decir que este proyecto tiene dos "servicios", uno es la base de datos para\nalmacenar los productos, usuarios, etc., y el otro es el servidor para exponer\nel API.'),(0,t.kt)("p",null,"Estos servicios tienen que estar corriendo, para que\nel API pueda funcionar."),(0,t.kt)("p",null,"Correr el servidor es bien simple: con ",(0,t.kt)("inlineCode",{parentName:"p"},"npm start")," va a ejecutar\nque tiene la l\xf3gica b\xe1sica de un servidor con express."),(0,t.kt)("p",null,"C\xf3mo levantar el servidor, este depende de tu instalaci\xf3n y sistema.\nPor ejemplo, en MacOS si instalaste con ",(0,t.kt)("inlineCode",{parentName:"p"},"homebrew"),", puede usar\n",(0,t.kt)("inlineCode",{parentName:"p"},"brew services start mongodb-community@6.0")," para levantarlo. O sin ",(0,t.kt)("inlineCode",{parentName:"p"},"homebrew"),",\n",(0,t.kt)("inlineCode",{parentName:"p"},"mongod --config /usr/local/etc/mongod.conf --fork"),". En Windows, hay que\nlevantarlo desde Services console."),(0,t.kt)("p",null,"Revisa ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition"},"la gu\xeda de instalaci\xf3n de\n"),",\n",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition-as-a-windows-service"},"gu\xeda de instalaci\xf3n de Windows"),",\no tu instalaci\xf3n en particular, para ejemplos en c\xf3mo levantarlo."),(0,t.kt)("h2",{id:"3-elegir-m\xf3dulo-cliente"},"3. Elegir m\xf3dulo (cliente)"),(0,t.kt)("p",null,"Ahora que ya tenemos un servidor de base de datos, vamos a necesitar elegir un\nm\xf3dulo o librer\xeda dise\xf1ado para interactuar con nuestra base de datos desde\nNode.js. Existen un mont\xf3n de opciones, pero para este proyecto te recomendamos\nusar el ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/drivers/node/current/"},"Node.js driver de MongoDB"),"\nque es la forma m\xe1s directa de interactuar con tu instancia de MongoDB."),(0,t.kt)("p",null,"Hay que instalar el Node.js Driver en este proyecto usando ",(0,t.kt)("inlineCode",{parentName:"p"},"npm"),",\nrevisa ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/drivers/node/current/quick-start/download-and-install/#install-the-node.js-driver"},"la documentaci\xf3n oficial para m\xe1s informaci\xf3n"),"."),(0,t.kt)("p",null,"El ",(0,t.kt)("em",{parentName:"p"},"boilerplate")," ya incluye un archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"config.js")," donde se leen las\nvariables de entorno, y entre ellas est\xe1 ",(0,t.kt)("inlineCode",{parentName:"p"},"DB_URL"),". Como vemos ese valor lo\nestamos asignando en la propiedad ",(0,t.kt)("inlineCode",{parentName:"p"},"dbUrl")," del m\xf3dulo ",(0,t.kt)("inlineCode",{parentName:"p"},"config"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"// `config.js`\nexports.dbUrl = process.env.MONGO_URL || process.env.DB_URL || 'mongodb://127.0.0.1:27017/test';\n")),(0,t.kt)("p",null,"Ahora que ya sabemos d\xf3nde encontrar el ",(0,t.kt)("em",{parentName:"p"},"connection string")," (en el m\xf3dulo\nconfig), podemos proceder a establecer una conexi\xf3n con la base de datos\nusando el cliente elegido."),(0,t.kt)("h3",{id:"ejemplo-de-conexi\xf3n-usando-mongodb-node-driver"},"Ejemplo de conexi\xf3n usando MongoDB Node Driver"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const { MongoClient } = require('mongodb');\nconst config = require(\"./config\");\n\nconst client = new MongoClient(config.dbUrl);\n\nasync function connect() {\n  try {\n    await client.connect();\n    const db = client.db(<NOMBRE_DB>); // Reemplaza <NOMBRE_DB> por el nombre del db\n    return db;\n  } catch (error) {\n    //\n  }\n}\n")),(0,t.kt)("p",null,"Puedes encontrar mas ejemplos en ",(0,t.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/drivers/node/current/"},"la documentaci\xf3n de MongoDB"),"."),(0,t.kt)("h2",{id:"4-definir-esquemas"},"4. Definir esquemas"),(0,t.kt)("p",null,"Como parte del proceso de dise\xf1o de nuestra base de datos vamos a tener que\nespecificar los ",(0,t.kt)("em",{parentName:"p"},"esquemas")," de nuestros ",(0,t.kt)("em",{parentName:"p"},"modelos")," de datos. Con esto nos\nreferimos a que tenemos que ",(0,t.kt)("em",{parentName:"p"},"describir")," de alguna forma la estructura de las colecciones\nque vamos a usar y la ",(0,t.kt)("em",{parentName:"p"},"forma")," de los objetos que vayamos a\nguardar en esas colecciones."),(0,t.kt)("p",null,"Puedes usar ",(0,t.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0"},"la documentaci\xf3n de API"),"\nque describe la estructura de ",(0,t.kt)("inlineCode",{parentName:"p"},"products"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"orders"),", etc. para guiar el dise\xf1o."),(0,t.kt)("h2",{id:"5-implementar-los-primeros-todos"},"5. Implementar los primeros TODOs"),(0,t.kt)("p",null,"El boilerplate del proyecto viene con archivos con l\xf3gica para arrancar el server\ny otros que contienen funciones de rutas y autenticaci\xf3n, pero muchas est\xe1n vac\xedas.\nHemos marcado las primeras partes esenciales con comentarios ",(0,t.kt)("inlineCode",{parentName:"p"},"TODO"),"\n(del ingl\xe9s ",(0,t.kt)("em",{parentName:"p"},"por hacer"),"), que es una convenci\xf3n en el desarrollo de software,\ncuando queda algo pendiente de hacer."),(0,t.kt)("p",null,"Aqu\xed te guiamos un poco sobre esto TODO's."),(0,t.kt)("h3",{id:"todo-1-conectar-a-la-base-de-datos"},"TODO 1: Conectar a la base de datos"),(0,t.kt)("p",null,"En el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"connect.js")," hay que hacer la conexi\xf3n con la base de datos."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const { dbUrl } = config;\n\nasync function connect() {\n  // TODO: Conexi\xf3n a la Base de Datos\n}\n")),(0,t.kt)("p",null,"Aqu\xed debes usar el ",(0,t.kt)("inlineCode",{parentName:"p"},"dbUrl")," que importamos del config para establecer la conexi\xf3n.\nLas funciones que van a interactuar con la base de datos tienen que invocar\n",(0,t.kt)("inlineCode",{parentName:"p"},"connect"),"."),(0,t.kt)("h3",{id:"todo-2-crear-el-usuario-admin"},"TODO 2: Crear el usuario ",(0,t.kt)("em",{parentName:"h3"},"admin")),(0,t.kt)("p",null,"El proyecto depende en la existencia de un usuario en la base de datos que\ntiene privilegios de administrador, para as\xed poder crear otros usuarios, etc."),(0,t.kt)("p",null,"En ",(0,t.kt)("inlineCode",{parentName:"p"},"routes/users.js")," invocamos una funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"initAdminUser(app, next)"),"\nal final de archivo, y definimos esta funci\xf3n arriba en este misma archivo."),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"initAdminUser")," est\xe1 incompleto, y hay un TODO para crear el usuario admin,\ndonde tienes que primero chequear si un admin ya existe, y si no agregar uno\na la base de datos."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"const initAdminUser = (app, next) => {\n  const { adminEmail, adminPassword } = app.get('config');\n  if (!adminEmail || !adminPassword) {\n    return next();\n  }\n\n  const adminUser = {\n    email: adminEmail,\n    password: bcrypt.hashSync(adminPassword, 10),\n    roles: { admin: true },\n  };\n\n  // TODO: crear usuaria admin\n  next();\n};\n\nPuedes confirmar si tu c\xf3digo funciona revisando la base de datos y con un testeo unitario.\n\n")),(0,t.kt)("h3",{id:"todo-3-implementar-autenticaci\xf3n-de-usuario"},"TODO 3: Implementar autenticaci\xf3n de usuario"),(0,t.kt)("p",null,"En ",(0,t.kt)("inlineCode",{parentName:"p"},"routes/auth.js")," est\xe1 la ruta '/auth' definida, con un"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"}," // TODO: autenticar a la usuarix\n")),(0,t.kt)("p",null,"Aqu\xed es donde debes verificar que el correo y password coinciden con\ndatos de alg\xfan usuario en la base de datos. Si coinciden, hay que generar un\n",(0,t.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"JWT token"),"\ny mandarlo en la respuesta, para que el usuario puede usarlo en sus peticiones futuras.\nPara ejemplos con mas detalle, busca tutoriales de autenticaci\xf3n con JWT y node/express."),(0,t.kt)("h3",{id:"todo-4-implementar-el-middleware-de-autenticaci\xf3n"},"TODO 4: Implementar el middleware de autenticaci\xf3n"),(0,t.kt)("p",null,"En ",(0,t.kt)("inlineCode",{parentName:"p"},"middleware/auth.js")," hay varios ",(0,t.kt)("inlineCode",{parentName:"p"},"TODOs"),". Usa esta oportunidad para familiarizarte\ncon ",(0,t.kt)("a",{parentName:"p",href:"https://expressjs.com/es/guide/using-middleware.html"},"el concepto de middleware en express"),"."),(0,t.kt)("p",null,"La aplicaci\xf3n va a usar este middleware para chequear que las peticiones\nque requieren autenticaci\xf3n sean autorizados, es decir, que tienen un token v\xe1lido."),(0,t.kt)("h3",{id:"todo-5-implementar-la-ruta-get-users"},"TODO 5: Implementar la ruta GET ",(0,t.kt)("inlineCode",{parentName:"h3"},"/users")),(0,t.kt)("p",null,"Para juntar y verificar todo el trabajo que has hecho, seria bueno implementar\nuna ruta b\xe1sica del API, en este caso recomendamos ",(0,t.kt)("inlineCode",{parentName:"p"},"/users")," porque ya debes\ntener el user admin en tu base de datos, y adem\xe1s porque esta ruta usa\nel middleware de auth."),(0,t.kt)("p",null,"Vas a ver que la ruta ",(0,t.kt)("inlineCode",{parentName:"p"},"/users")," usa la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"getUsers")," que est\xe1 definido en\n",(0,t.kt)("inlineCode",{parentName:"p"},"controller/users.js"),". El concepto de controller nos sirve para separar m\xe1s\nla l\xf3gica de la definici\xf3n de rutas con la implementaci\xf3n que va a hablar con\nel base de datos. Hay que implementar ",(0,t.kt)("inlineCode",{parentName:"p"},"getUsers")," para obtener la lista de\nusers de la colecci\xf3n en tu base de datos."),(0,t.kt)("p",null,"Revisa ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes"},"el tutorial de Node y express en Mozilla"),"\nque habla de controllers."),(0,t.kt)("h3",{id:"todo-6-implementar-la-ruta-post-users"},"TODO 6: Implementar la ruta POST ",(0,t.kt)("inlineCode",{parentName:"h3"},"/users")),(0,t.kt)("p",null,"Los tests e2e invocan la ruta POST ",(0,t.kt)("inlineCode",{parentName:"p"},"/users")," para agregar la usuaria para los tests.\nPor lo tanto, antes de poder ejecutar los tests e2e, esta ruta debe funcionar\ncorrectamente."),(0,t.kt)("h2",{id:"6-definir-estrategia-de-pruebas-unitarias"},"6. Definir estrategia de pruebas unitarias"),(0,t.kt)("p",null,"Adem\xe1s de las pruebas ",(0,t.kt)("inlineCode",{parentName:"p"},"e2e")," que ya incluye el ",(0,t.kt)("em",{parentName:"p"},"boilerplate")," del proyecto, se\nespera que puedas tambi\xe9n usar pruebas ",(0,t.kt)("em",{parentName:"p"},"unitarias")," para el desarrollo de los\ndiferentes ",(0,t.kt)("em",{parentName:"p"},"endpoints")," o ",(0,t.kt)("em",{parentName:"p"},"rutas")," as\xed como otros m\xf3dulos internos que decidas\ndesarrollar."),(0,t.kt)("p",null,"Para hacer pruebas unitarias de ",(0,t.kt)("em",{parentName:"p"},"rutas")," de Express, te recomendamos explorar la\nlibrer\xeda ",(0,t.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/supertest"},(0,t.kt)("inlineCode",{parentName:"a"},"supertest")),", que puedes usar\nen combinaci\xf3n con ",(0,t.kt)("inlineCode",{parentName:"p"},"jest"),"."),(0,t.kt)("p",null,"Otro punto a tener en cuenta en las pruebas unitarias, es c\xf3mo ",(0,t.kt)("em",{parentName:"p"},"mockear")," la base\nde datos. Algunas bases de datos ofrecen herramientas (como\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server"},(0,t.kt)("inlineCode",{parentName:"a"},"mongodb-memory-server")),") que\nnos permiten usar una base de datos en memoria y as\xed evitar hacer ",(0,t.kt)("em",{parentName:"p"},"mocks")," per\nse, pero por lo general querremos considerar c\xf3mo abstraer la interacci\xf3n\ncon la base de datos para facilitar ",(0,t.kt)("em",{parentName:"p"},"mocks")," que nos permitan concentrarnos en\nla l\xf3gica de las rutas."),(0,t.kt)("h2",{id:"7-familiarizarte-con-las-pruebas-de-integraci\xf3n-e2e"},"7. Familiarizarte con las pruebas de integraci\xf3n (e2e)"),(0,t.kt)("p",null,"El ",(0,t.kt)("em",{parentName:"p"},"boilerplate")," de este proyecto ya incluye pruebas ",(0,t.kt)("inlineCode",{parentName:"p"},"e2e")," (end-to-end) o de\n",(0,t.kt)("em",{parentName:"p"},"integraci\xf3n"),", que se encargan de probar nuestra aplicaci\xf3n en conjunto,\na trav\xe9s de la interfaz HTTP. A diferencia de las pruebas unitarias, en vez\nde importar o requerir un m\xf3dulo y probar una funci\xf3n de forma aislada, lo que\nvamos a hacer es arrancar toda la aplicaci\xf3n, y probarla tal como se usar\xeda en\nel mundo real, para ello la aplicaci\xf3n de prueba necesitar\xe1 una base de datos y\nescuchar en un puerto de red."),(0,t.kt)("p",null,"Para correr pruebas e2e sobre instancia local podemos usar:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:e2e\n")),(0,t.kt)("p",null,"Esto levanta la aplicaci\xf3n con ",(0,t.kt)("inlineCode",{parentName:"p"},"npm start")," y corre los tests contra la URL de\nesta instancia (por defecto ",(0,t.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080"),")."),(0,t.kt)("p",null,"Los pruebas e2e dependen del c\xf3digo de (",(0,t.kt)("inlineCode",{parentName:"p"},"globalSetup.js"),")","[../e2e/globalSetup.js]","\nque ",(0,t.kt)("inlineCode",{parentName:"p"},"jest")," ejecuta en primer lugar, antes de los tests.\nEste paso de setup levanta un mock db (como hemos hablado de\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server"},(0,t.kt)("inlineCode",{parentName:"a"},"mongodb-memory-server")),")\ny jest se conecta a este mock db."),(0,t.kt)("p",null,"Para este configuraci\xf3n usamos ",(0,t.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server")," y\nun preset ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/shelfio/jest-mongodb"},(0,t.kt)("inlineCode",{parentName:"a"},"jest-mongodb")),"\nque ya est\xe1n incluido en el boilerplate."))}c.isMDXComponent=!0}}]);