enum HttpCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
  }
  
  function respond(status: HttpCodes) {
    // handle response
  }
  
  respond(HttpCodes.OK);
  
  export {};

  const enum HttpCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
  }
  
  const status = HttpCodes.OK;