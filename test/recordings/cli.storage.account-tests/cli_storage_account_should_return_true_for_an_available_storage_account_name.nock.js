// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/operations/isavailable/thisisanameforxplattest')
  .reply(200, "<AvailabilityResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Result>true</Result><Reason i:nil=\"true\"/></AvailabilityResponse>", { 'cache-control': 'no-cache',
  'content-length': '190',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.254 (rd_rdfe_stable.150807-1029) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '17959e085bdc0852a8993a966d26969e',
  date: 'Mon, 17 Aug 2015 08:34:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices/operations/isavailable/thisisanameforxplattest')
  .reply(200, "<AvailabilityResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Result>true</Result><Reason i:nil=\"true\"/></AvailabilityResponse>", { 'cache-control': 'no-cache',
  'content-length': '190',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.254 (rd_rdfe_stable.150807-1029) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '17959e085bdc0852a8993a966d26969e',
  date: 'Mon, 17 Aug 2015 08:34:03 GMT',
  connection: 'close' });
 return result; }]];