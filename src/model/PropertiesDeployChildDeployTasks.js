/**
 * BIG-IQ Deploy Configuration
 * API used to deploy configuration changes made on BIG-IQ or BIG-IP devices.
 *
 * OpenAPI spec version: 5.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PropertiesDeployDeviceReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PropertiesDeployDeviceReference'));
  } else {
    // Browser globals (root is window)
    if (!root.BigIqDeployConfiguration) {
      root.BigIqDeployConfiguration = {};
    }
    root.BigIqDeployConfiguration.PropertiesDeployChildDeployTasks = factory(root.BigIqDeployConfiguration.ApiClient, root.BigIqDeployConfiguration.PropertiesDeployDeviceReference);
  }
}(this, function(ApiClient, PropertiesDeployDeviceReference) {
  'use strict';




  /**
   * The PropertiesDeployChildDeployTasks model module.
   * @module model/PropertiesDeployChildDeployTasks
   * @version 5.2
   */

  /**
   * Constructs a new <code>PropertiesDeployChildDeployTasks</code>.
   * @alias module:model/PropertiesDeployChildDeployTasks
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PropertiesDeployChildDeployTasks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertiesDeployChildDeployTasks} obj Optional instance to populate.
   * @return {module:model/PropertiesDeployChildDeployTasks} The populated <code>PropertiesDeployChildDeployTasks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('skipDistribution')) {
        obj['skipDistribution'] = ApiClient.convertToType(data['skipDistribution'], 'Boolean');
      }
      if (data.hasOwnProperty('deviceReference')) {
        obj['deviceReference'] = ApiClient.convertToType(data['deviceReference'], [PropertiesDeployDeviceReference]);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} skipDistribution
   */
  exports.prototype['skipDistribution'] = undefined;
  /**
   * @member {Array.<module:model/PropertiesDeployDeviceReference>} deviceReference
   */
  exports.prototype['deviceReference'] = undefined;



  return exports;
}));


