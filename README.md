"# jobboard-backend"


## HTTP Status Code

- `200 OK`: The request was successful.
- `201 Created`: The request has been fulfilled, and a new resource is created.
- `204 No Content`: The server successfully processed the request but there is no content to send.
- `400 Bad Request`: The server cannot understand or process the request due to client error.
- `401 Unauthorized`: Authentication is required, and the user has not provided valid credentials.
- `403 Forbidden`: The server understood the request, but the client does not have permission to access the requested resource.     
- `404 Not Found`: The requested resource could not be found on the server.
- `405 Method Not Allowed`: The requested method is not supported for the specified resource.
- `500 Internal Server Error`: A generic error message indicating an unexpected condition on the server.
- `502 Bad Gateway`:  The server, while acting as a gateway, received an invalid response from an upstream server.   
- `503 Service Unavailable`: The server is not ready to handle the request. Commonly used for maintenance.

## Endpoint

### For jobs

- GET: `/api/jobs`
- POST: `/api/jobs`

## For admin

- GET: `/api/admin`
- POST: `/api/admin`
- PUT: `/api/admin/:id`
- DELETE: `/api/admin/:id`
