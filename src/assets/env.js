(function (window) {
    window["env"] = window["env"] || {};

    // Environment variables
    window["env"]["BACKEND_IP"] = "${BACKEND_IP}";
    window["env"]["JWT_BACKEND_IP"] = "${JWT_BACKEND_IP}";
})(this);