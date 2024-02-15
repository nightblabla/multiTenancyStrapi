// module.exports = {
//     apps: [
//       {
//         name: 'strapimultitest1',
//         cwd: 'Users/USER/strapi-multitenancy',
//         script: 'npm',
//         args: 'start',
//         env: {
//           NODE_ENV: 'strapimultitest1',
//           HOST_PORT_TEST1: 1338,
//           DATABASE_HOST_PRODUCTION: 'localhost', 
//           DATABASE_PORT_PRODUCTION: '3306',
//           DATABASE_USER_PRODUCTION: 'root',
//           DATABASE_PASS_PRODUCTION: 'root',
//           DATABASE_NAME_TEST1: 'strapimultitest1',
//           ADMIN_JWT_SECRET :'o6PCK1NU81xNJDA4Qx9e6Q==',
//           DOMAIN_URL: 'localhost'
//         }
//       },
//       {
//         name: 'strapimultitest2',
//         cwd: 'Users/USER/strapi-multitenancy',
//         script: 'npm',
//         args: 'start',
//         env: {
//           NODE_ENV: 'strapimultitest2',
//           HOST_PORT_TEST1: 1339,
//           DATABASE_HOST_PRODUCTION: 'localhost',
//           DATABASE_PORT_PRODUCTION: '3306',
//           DATABASE_USER_PRODUCTION: 'root', 
//           DATABASE_PASS_PRODUCTION: 'root',
//           DATABASE_NAME_TEST1: 'strapimultitest2',
//           ADMIN_JWT_SECRET :'o6PCK1NU81xNJDA4Qx9e6Q==',
//           DOMAIN_URL: 'localhost'
//         }
//       }
//     ]
//   };
// const path = require('path');
// const path_NODEJS = process.env.Path.split(';').filter( f => f.includes('nodejs') )[0];
// const path_NPM = path.join( path_NODEJS, 'node_modules', 'npm', 'bin', 'npm-cli.js');

module.exports = {

    apps: [
      {
        name: 'strapimultitest1',
        cwd: '/home/emre/strapi-multitenancy',
        //script: '..\\..\\..\\..\\..\\..\\..\\..\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js',
        script: "npm",
        //script: path_NPM,
       // script : "node_modules/next/dist/bin/next",
        args: 'start',
        //interpreter: "C:\\Program Files\\nodejs\\node.exe",
        //interpreter: "node",
       // interpreter: process.platform === 'win32' && "C:\\Windows\\System32\\cmd.exe",
        env: {
          NODE_ENV: 'strapimultitest1',
          HOST_PORT_SITE1: 4338,
          DOMAIN_URL: 'localhost'
        }
      },
      {
        name: 'strapimultitest2',
        cwd: '/home/emre/strapi-multitenancy',
       // script: '..\\..\\..\\..\\..\\..\\..\\..\\..\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js',
        //script: path_NPM,
        script:"npm",
       // script : "node_modules/next/dist/bin/next",
        args: 'start',
        //interpreter: "C:\\Program Files\\nodejs\\node.exe",
        //interpreter: process.platform === 'win32' && "C:\\Windows\\System32\\cmd.exe",
        env: {
          NODE_ENV: 'strapimultitest2',
          HOST_PORT_SITE2: 4339,
          DOMAIN_URL: 'localhost'
        }
      }
    ]
  };
  