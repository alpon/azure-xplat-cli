/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var resourceUtils = require('../resource/resourceUtils');
var tagUtils = require('../tag/tagUtils');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.show = function (vNet, output) {
  var indent = 0;
  exports.showVnet(vNet, output, indent);
  exports.showAddressSpace(vNet, output, indent);
  exports.showDhcpOptions(vNet, output, indent);
  exports.showSubnetList(vNet, output, indent);
};

exports.showVnet = function (vNet, output, indent) {
  output.nameValue($('Id'), vNet.id);
  output.nameValue($('Name'), vNet.name, true, indent);

  var resource = resourceUtils.getResourceInformation(vNet.id);
  output.nameValue($('Type'), vNet.type || resource.resourceType, true, indent);
  output.nameValue($('Location'), vNet.location, true, indent);

  if (vNet.tags) {
    output.nameValue($('Tags'), tagUtils.getTagsInfo(vNet.tags), true, indent);
  }
  output.nameValue($('ProvisioningState'), vNet.provisioningState, true, indent);
};

exports.showAddressSpace = function (vNet, output, indent) {
  if (vNet.addressSpace && vNet.addressSpace.addressPrefixes && vNet.addressSpace.addressPrefixes.length > 0) {
    output.list('Address prefixes', vNet.addressSpace.addressPrefixes, false, indent);
  }
};

exports.showDhcpOptions = function (vNet, output, indent) {
  if (vNet.dhcpOptions && vNet.dhcpOptions.dnsServers && vNet.dhcpOptions.dnsServers.length > 0) {
    output.list('Address prefixes', vNet.dhcpOptions.dnsServers, false, indent);
  }
};

exports.showSubnetList = function (vNet, output, indent) {
  if (vNet.subnets && vNet.subnets.length > 0) {
    output.header('Subnets', false, indent);
    indent = indent + 2;
    vNet.subnets.forEach(function (subnet) {
      _showSubnetMainProperties(subnet, output, indent);
    });
  }
};

exports.showSubnet = function (subnet, output, indent) {
  if (!indent) {
    indent = 0;
  }

  output.nameValue($('Id'), subnet.id, true, indent);

  var resource = resourceUtils.getResourceInformation(subnet.id);
  output.nameValue($('Type'), subnet.type || resource.resourceType, true, indent);
  output.nameValue($('ProvisioningState'), subnet.provisioningState, true, indent);
  _showSubnetMainProperties(subnet, output, indent);
};

_showSubnetMainProperties = function (subnet, output, indent) {
  output.nameValue($('Name'), subnet.name, true, indent);
  output.nameValue($('Address prefix'), subnet.addressPrefix, true, indent);
  output.nameValue($('Network security group'), subnet.networkSecurityGroup, true, indent);

  if (subnet.ipConfigurations && subnet.ipConfigurations.length > 0) {
    output.header('IP configurations', false, indent);
    indent = indent + 2;
    subnet.ipConfigurations.forEach(function (subnetIpConfiguration) {
      output.listItem(subnetIpConfiguration.id, false, indent);
    });
  }
  output.data('');
};