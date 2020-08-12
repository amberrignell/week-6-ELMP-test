const handlers = require("./handlers");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    handlers.homeHandler(request, response);
  } else if (url === "/read-fortune") {
    handlers.readFortuneHandler(request, response);
  } else if (url === "/create-fortune") {
    handlers.createFortuneHandler(request, response);
  } else if (url === "/all-fortunes") {
    handlers.allFortunesHandler(request, response);
  } else {
    handlers.missingHandler(request, response);
  }
}

module.exports = router;
