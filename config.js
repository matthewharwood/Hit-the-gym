System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "jquery": "npm:jquery@2.1.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.89",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.89",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

