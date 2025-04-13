/** * Created by mike on 15/08/15.
 */

const fs = require("fs");

function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    return handle[pathname](response, request);
  } else if (pathname.match(/\.(js|ico|png|jpg)$/)) {
    return handle["/static"](response, request, pathname);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not Found");
    response.end();
  }
}

exports.route = route;
