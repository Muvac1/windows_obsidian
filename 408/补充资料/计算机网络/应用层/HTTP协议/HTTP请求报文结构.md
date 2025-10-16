1. #HTTP请求报文结构  
	一个HTTP请求报文由三部分组成：
	*   #请求行 (Request Line): 如 `GET /index.html HTTP/1.1`，包含请求方法、URI和HTTP版本。
	*   #请求头 (Request Headers): 如 `Host: ...`, `Connection: ...` 等，包含关于客户端、请求的资源的元数据。
	*   #请求体 (Request Body): 对于`GET`请求，请求体通常为空。对于`POST`或`PUT`请求，请求体则包含要提交给服务器的数据（如表单信息）。