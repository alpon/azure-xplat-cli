// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet4789/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"healthy\",\"pushEntityNamespace\":\"clitestDotNet4789Hub-ns\",\"pushEntityPath\":\"clitestDotNet4789Hub\",\"pushEntityConnectionString\":\"Endpoint=sb:\\/\\/clitestdotnet4789hub-ns.servicebus.windows.net\\/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=\\/JiVQL4bRloEtiWAKosxRPH\\/vctFi6nIJOtd6jyCiGM=\",\"namespaceCreated\":true,\"pushEntityCreated\":true}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.243 (rd_rdfe_stable.150618-1025) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '60c1d17ecd26b35e9d07e9e530587c53',
  date: 'Mon, 29 Jun 2015 22:15:03 GMT' });
 return result; }]];