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
  .post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/start?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"cliTestOrigin01\",\"properties\":{\r\n        \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/e89731cd-e180-4594-b36a-4d6c965a5254/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '1e1df294-dd2e-4eec-bedf-f45cc727dae3',
  'x-ms-client-request-id': '866a8fee-3f65-4f60-9471-7a34202a3eb7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/e89731cd-e180-4594-b36a-4d6c965a5254?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '513d1438-0789-41ca-af26-2ea4b0587451',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160317T183734Z:513d1438-0789-41ca-af26-2ea4b0587451',
  date: 'Thu, 17 Mar 2016 18:37:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourceGroups/xplattestadlsrg01/providers/Microsoft.Cdn/profiles/cliTestProfile01/endpoints/cliTestEndpoint01/start?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cliTestEndpoint01.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"cliTestOrigin01\",\"properties\":{\r\n        \"hostName\":\"test.azure.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/e89731cd-e180-4594-b36a-4d6c965a5254/profileresults/cliTestProfile01/endpointresults/cliTestEndpoint01?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '1e1df294-dd2e-4eec-bedf-f45cc727dae3',
  'x-ms-client-request-id': '866a8fee-3f65-4f60-9471-7a34202a3eb7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/e89731cd-e180-4594-b36a-4d6c965a5254?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '513d1438-0789-41ca-af26-2ea4b0587451',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160317T183734Z:513d1438-0789-41ca-af26-2ea4b0587451',
  date: 'Thu, 17 Mar 2016 18:37:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/e89731cd-e180-4594-b36a-4d6c965a5254?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'af714093-0325-4683-a250-0fc6cf4a0a09',
  'x-ms-client-request-id': '79eca23c-6805-4bc0-9663-fa703a974397',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6d87d91b-8ea9-4f4c-aabf-dcd9907412f5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160317T183804Z:6d87d91b-8ea9-4f4c-aabf-dcd9907412f5',
  date: 'Thu, 17 Mar 2016 18:38:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bab71ab8-daff-4f58-8dfc-ed0d61a3fa6b/resourcegroups/xplattestadlsrg01/providers/Microsoft.Cdn/operationresults/e89731cd-e180-4594-b36a-4d6c965a5254?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'af714093-0325-4683-a250-0fc6cf4a0a09',
  'x-ms-client-request-id': '79eca23c-6805-4bc0-9663-fa703a974397',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '6d87d91b-8ea9-4f4c-aabf-dcd9907412f5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160317T183804Z:6d87d91b-8ea9-4f4c-aabf-dcd9907412f5',
  date: 'Thu, 17 Mar 2016 18:38:04 GMT',
  connection: 'close' });
 return result; }]];