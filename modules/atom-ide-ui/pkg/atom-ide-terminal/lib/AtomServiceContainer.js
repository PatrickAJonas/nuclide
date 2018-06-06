'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRpcService = setRpcService;
exports.getPtyServiceByNuclideUri = getPtyServiceByNuclideUri;

var _nuclideUri;

function _load_nuclideUri() {
  return _nuclideUri = _interopRequireDefault(require('../../../../nuclide-commons/nuclideUri'));
}

var _UniversalDisposable;

function _load_UniversalDisposable() {
  return _UniversalDisposable = _interopRequireDefault(require('../../../../nuclide-commons/UniversalDisposable'));
}

var _PtyService;

function _load_PtyService() {
  return _PtyService = _interopRequireWildcard(require('./pty-service/PtyService'));
}

var _nullthrows;

function _load_nullthrows() {
  return _nullthrows = _interopRequireDefault(require('nullthrows'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _rpcService = null; /**
                         * Copyright (c) 2017-present, Facebook, Inc.
                         * All rights reserved.
                         *
                         * This source code is licensed under the BSD-style license found in the
                         * LICENSE file in the root directory of this source tree. An additional grant
                         * of patent rights can be found in the PATENTS file in the same directory.
                         *
                         *  strict-local
                         * @format
                         */

function setRpcService(rpcService) {
  _rpcService = rpcService;
  return new (_UniversalDisposable || _load_UniversalDisposable()).default(() => {
    _rpcService = null;
  });
}

function getPtyServiceByNuclideUri(uri) {
  const serviceUri = uri || '';
  if (_rpcService == null && !(_nuclideUri || _load_nuclideUri()).default.isRemote(serviceUri)) {
    return _PtyService || _load_PtyService();
  }

  return (0, (_nullthrows || _load_nullthrows()).default)(_rpcService).getServiceByNuclideUri('PtyService', serviceUri);
}