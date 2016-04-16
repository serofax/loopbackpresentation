module.exports = function(Lake) {
    Lake.disableRemoteMethod('createChangeStream', true);
    Lake.disableRemoteMethod('getChangeStream', true);
};
