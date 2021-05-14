const marker = require("@ajar/marker");
exports.slugger = function (...strings) {
  return strings.join("-");
};

marker.magenta(this.slugger("bhshir", "shirbh"));
