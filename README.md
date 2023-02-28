# lws-json-server-todos

Example in memory todos api with json-server

# Installation

```bash
git clone
cd repo
npm install
npm start
```

Now opens:

- http://localhost:9000

You now have a full REST API. Test with POSTMAN or any other REST Client):

Retrieve all (GET):

```bash
GET http://localhost:9000/todos
```

Retrieve one (GET):

```bash
GET http://localhost:9000/todos/1
```

Post a todo (POST):

```bash
POST http://localhost:9000/todos text="Learn Redux" completed=false color="red"
```

Update todo (PUT):

```bash
PUT http://localhost:9000/todos/3 name="Learn Redux " completed=true color="green"
```

Delete todo (DELETE):

```bash
DELETE http://localhost:9000/todos/1
```
"# simple-todo-json-server" 
"# simple-todo-json-server" 
"# simple-todo-json-server" 
