# INAISO-APP

![Mi imagen local](joever.jpg)

Sale este error, me rindo.

Starting the development server...

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/util/createHash.js:90:53)
    at NormalModule._initBuildHash (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/NormalModule.js:386:16)
    at handleParseError (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/NormalModule.js:434:10)
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/NormalModule.js:466:5
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/NormalModule.js:327:12
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at iterateNormalLoaders (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:221:10)
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:236:3
    at runSyncOrAsync (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:130:11)
    at iterateNormalLoaders (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:232:2)
    at Array.<anonymous> (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9
/home/bharragan/Documentos/inaiso-app/frontend/node_modules/react-scripts/scripts/start.js:19
  throw err;
  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/util/createHash.js:90:53)
    at NormalModule._initBuildHash (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/NormalModule.js:386:16)
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/NormalModule.js:418:10
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/webpack/lib/NormalModule.js:293:13
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:367:11
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:233:18
    at context.callback (/home/bharragan/Documentos/inaiso-app/frontend/node_modules/loader-runner/lib/LoaderRunner.js:111:13)
    at /home/bharragan/Documentos/inaiso-app/frontend/node_modules/babel-loader/lib/index.js:51:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.17.1