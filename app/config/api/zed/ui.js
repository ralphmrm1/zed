/* global sandboxRequest*/
module.exports = {
    prompt: function(message, inputText, width, height) {
        return sandboxRequest("zed/ui", "prompt", [message, inputText, width, height]);
    },
    blockUI: function(message, withSpinner) {
        return sandboxRequest("zed/ui", "blockUI", [message, withSpinner]);
    },
    unblockUI: function() {
        return sandboxRequest("zed/ui", "unblockUI", []);
    }
};
