/** * Created by mike on 15/08/15.
 */

var server = require("./server.js");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/static"] = requestHandlers.staticHandler;

server.start(router.route, handle);
