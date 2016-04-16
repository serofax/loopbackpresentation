module.exports = function(City) {
    City.disableRemoteMethod('createChangeStream', true);
    City.disableRemoteMethod('getChangeStream', true);
    City.disableRemoteMethod('count', true);
    City.disableRemoteMethod('__destroyById__lakes', false);
};
