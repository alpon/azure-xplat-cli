// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b',
    name: 'KasotaTest-001',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_1'] = 'xplattestadlsrg01';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_1'] = 'cliTestProfile01';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP_2'] = 'xplattestadlsrg02';
  process.env['AZURE_ARM_TEST_CDN_PROFILE_2'] = 'cliTestProfile02';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_1'] = 'cliTestEndpoint01';
  process.env['AZURE_ARM_TEST_CDN_ENDPOINT_2'] = 'cliTestEndpoint02';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_1'] = 'cliTestOrigin01';
  process.env['AZURE_ARM_TEST_CDN_ORIGIN_2'] = 'cliTestOrigin02';
  process.env['AZURE_ARM_TEST_ENDPOINT_TEST_LOCATION_1'] = 'eastus';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_NAME_1'] = 'cliTestCustomDomain01';
  process.env['AZURE_ARM_TEST_CUSTOM_DOMAIN_HOST_NAME_1'] = 'cli-1-406f580d-a634-4077-9b11-216a70c5998d.azureedge-test.net';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??cli-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'c3ef592a-eff9-4da6-a706-96b344f180e9',
  'x-ms-client-request-id': '46f2ea35-fe57-465f-a596-cd678e550574',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f28c49eb-4ef6-407e-a644-1c837d5dfc97',
  'x-ms-routing-request-id': 'WESTUS:20160317T184029Z:f28c49eb-4ef6-407e-a644-1c837d5dfc97',
  date: 'Thu, 17 Mar 2016 18:40:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint02/validateCustomDomain?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"HostName \\\"??cli-6029da3a-835e-4506-b4ea-bd5375165cdf??\\\" is invalid. It must be a valid domain name, IP version 4, or IP version 6.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '201',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'c3ef592a-eff9-4da6-a706-96b344f180e9',
  'x-ms-client-request-id': '46f2ea35-fe57-465f-a596-cd678e550574',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f28c49eb-4ef6-407e-a644-1c837d5dfc97',
  'x-ms-routing-request-id': 'WESTUS:20160317T184029Z:f28c49eb-4ef6-407e-a644-1c837d5dfc97',
  date: 'Thu, 17 Mar 2016 18:40:28 GMT',
  connection: 'close' });
 return result; }]];