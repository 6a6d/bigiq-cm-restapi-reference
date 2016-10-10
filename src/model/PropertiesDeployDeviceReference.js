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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BigIqDeployConfiguration) {
      root.BigIqDeployConfiguration = {};
    }
    root.BigIqDeployConfiguration.PropertiesDeployDeviceReference = factory(root.BigIqDeployConfiguration.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PropertiesDeployDeviceReference model module.
   * @module model/PropertiesDeployDeviceReference
   * @version 5.2
   */

  /**
   * Constructs a new <code>PropertiesDeployDeviceReference</code>.
   * @alias module:model/PropertiesDeployDeviceReference
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PropertiesDeployDeviceReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertiesDeployDeviceReference} obj Optional instance to populate.
   * @return {module:model/PropertiesDeployDeviceReference} The populated <code>PropertiesDeployDeviceReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} link
   */
  exports.prototype['link'] = undefined;



  return exports;
}));


