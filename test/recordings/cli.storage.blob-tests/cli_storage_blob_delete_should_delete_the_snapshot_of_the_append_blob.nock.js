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
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .delete('/storage-cli-blob-test/appendblobname8860?snapshot=2016-08-12T06%3A47%3A15.0390271Z')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cbf28441-0001-000a-4265-f48f8e000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .delete('/storage-cli-blob-test/appendblobname8860?snapshot=2016-08-12T06%3A47%3A15.0390271Z')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'cbf28441-0001-000a-4265-f48f8e000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:48:21 GMT',
  connection: 'close' });
 return result; }]];