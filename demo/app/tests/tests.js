var Statusbar = require("nativescript-statusbar").Statusbar;
var statusbar = new Statusbar();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("greet function", function() {
  it("exists", function() {
    expect(statusbar.greet).toBeDefined();
  });

  it("returns a string", function() {
    expect(statusbar.greet()).toEqual("Hello, NS");
  });
});