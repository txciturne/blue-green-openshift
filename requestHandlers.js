/** * Created by mike on 15/08/15.
 */

const fs = require("fs");
const path = require("path");

function staticHandler(response, request, pathname) {
  const filePath = path.join(__dirname, pathname);

  fs.readFile(filePath, function (error, content) {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("404 Not Found (static)");
      response.end();
    } else {
      let contentType = "text/plain";
      if (pathname.endsWith(".js")) contentType = "application/javascript";
      if (pathname.endsWith(".ico")) contentType = "image/x-icon";

      response.writeHead(200, { "Content-Type": contentType });
      response.write(content);
      response.end();
    }
  });
}

exports.staticHandler = staticHandler;

function start(response) {
  console.log("Request handler 'start' was called.");

  var body =
    "<html>" +
    "<head>" +
    '<meta http-equiv="Content-Type" ' +
    'content="text/html; charset=UTF-8" />' +
    "</head>" +
    "<body>" +
    '<canvas id="myCanvas" width="578" height="200"></canvas>' +
    "<script>" +
    'var canvas = document.getElementById("myCanvas");' +
    'var context = canvas.getContext("2d");' +
    "var centerX = canvas.width / 2;" +
    "var centerY = canvas.height / 2;" +
    "var radius = 70;" +
    "context.beginPath();" +
    "context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);" +
    'context.fillStyle = "blue";' +
    "context.fill();" +
    "context.lineWidth = 5;" +
    'context.strokeStyle = "#003300";' +
    "context.stroke();" +
    "</script>" +
    "</body>" +
    "</html>";

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
}

exports.start = start;
