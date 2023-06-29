# Todo App Projesi
I have developed this REST AP
I for
an Todo application. This API performs fundamental CRUD operations. I have used JWT (JSON Web Tokens) for security in this application.
## Diagram for the application
### Configuration table
| Components        | Technology          |
|-------------------|---------------------|
| Backend           | Java             |
| Frontend          | React |
| Database          | MySQL,H2 Database |
| API Documentation | Postman,Swagger            |
| Server Build      | Maven              |
| API testing       | Postman,Swagger             |
| Tool              | Intellj Idea/VS Code   |

## Installation & Run
Before running the API server, you should update the database config inside the application.properties file.
Update the port number, username and password as per your local database config.

```yaml
######################################################################################
### System config ####################################################################
### PORT #############################################################################
server.port=3333

######################################################################################
### Log ##############################################################################
logging.file.name=./log/todo.log
logging.level.org.springframework.web=DEBUG
logging.level.org.hibernate=ERROR
logging.level.root=INFO

######################################################################################
### Relation Database ################################################################
### Database Config ##################################################################
logging.level.org.springframework.jdbc.core=TRACE
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.show-sql=true

# once create sonra  durdur update yap
#jpa > none update create, create-drop, validate
spring.jpa.hibernate.ddl-auto=create-drop

######################################################################################
### MYSQL DB #########################################################################
CREATE=SCHEMA `todo_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_turkish_ci ;
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db?createDatabaseIfNotExist=true&autoReconnect=true&useSSL=false
spring.datasource.username=root
spring.datasource.password=
spring.mvc.pathmatch.matching-strategy=ANT_PATH_MATCHER

```
## API Root Endpoint
### BackEnd
    http://localhost:3333/
### Frontend
	http://http://localhost:5173/
### Swagger
	http://localhost:3333/swagger-ui/index.html#/
## API Module Endpoints

### Todo Module

```yaml
GET /todo/api/v1/list :Gets all todos
PUT todo/api/v1/update/{id} :Update todo
POST /todo/api/v1/create:Save new todo
GET /todo/api/v1/find/{id}: Find employee
DELETE /todo/api/v1/delete/{id}: Delete todo
GET /todo/api/v1/done: Gets all dones
DELETE /todo/api/v1/deleteAllDone :Delete all dones
DELETE /todo/api/v1/all :Delete all
PUT /todo/api/v1/updatechecked/{id}/{done} :Update checked
```

### Auth Module

```yaml
POST /auth/register:Save new user
POST /auth/login:Login app

```
## Sample API Response for Todo Login

POST  http://localhost:3333/auth/register

**- Register Request Body**
```json
{
    "firstName":"isa",
    "lastName": "eren",
    "email": "isa@gmail.com",
    "password": "12345",
    "enabled": true,
    "tokenExpired": true,
    "roles": [
        {
            "id": 2,
            "name": "ROLE_User"
        }
    ]
}
```
**- Register Response**

```json
{
    "jwt": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpc2FAZ21haWwuY29tIiwiZXhwIjoxNjg4MDY1MjUzLCJpYXQiOjE2ODgwNDcyNTN9.Kk__gQrm_u3IFC2HWygioTY1TaPBfP7k-KPnVCxrdP0",
    "status": true,
    "result": {
        "id": 3,
        "firstName": "isa",
        "lastName": "eren",
        "email": "isa@gmail.com",
        "password": "$2a$10$LD/n5DGEELBSZy.MOsNnXuIlPZyenq3X8KG4UWesDlXNNe1Azzp86",
        "enabled": true,
        "tokenExpired": true,
        "roles": [
            {
                "id": 2,
                "name": "ROLE_User",
                "users": null
            }
        ]
    }
}
```
### Postman
![img.png](projectStructureImag%2Fimg.png)
![img_1.png](projectStructureImag%2Fimg_1.png)
![img_2.png](projectStructureImag%2Fimg_2.png)
![img_3.png](projectStructureImag%2Fimg_3.png)
### Swagger UI
![img_4.png](projectStructureImag%2Fimg_4.png)
![img_5.png](projectStructureImag%2Fimg_5.png)
![img_6.png](projectStructureImag%2Fimg_6.png)
![img_7.png](projectStructureImag%2Fimg_7.png)
### Project Structure
![img_8.png](projectStructureImag%2Fimg_8.png)
![img_9.png](projectStructureImag%2Fimg_9.png)!
[img_10.png](projectStructureImag%2Fimg_10.png)
![img_11.png](projectStructureImag%2Fimg_11.png)
![img_12.png](projectStructureImag%2Fimg_12.png)
![img_13.png](projectStructureImag%2Fimg_13.png)
