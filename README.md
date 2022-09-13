
## API Endpoints

### /api/auth/signup
#### new user signup

```
POST /api/auth/signup

{
  "email": "
  "password": "
}

```

### /api/auth/login
#### user login

```
POST /api/auth/login

{
  "email": "
  "password": "
}

```

### /api/auth/logout
#### user logout


```
POST /api/auth/logout

```

### /api/auth/verify
#### verify email

```
POST /api/auth/verify

{
  "email": "
}

```

### /api/todos
#### get all todos

```
GET /api/todos

```

### Example output
```
{
  "todos": [
    {
      "id": 1,
      "title": "todo 1",
      "description": "todo 1 description",
      "completed": false,
      "createdAt": "2020-05-01T00:00:00.000Z",
      "updatedAt": "2020-05-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "title": "todo 2",
      "description": "todo 2 description",
      "completed": false,
      "createdAt": "2020-05-01T00:00:00.000Z",
      "updatedAt": "2020-05-01T00:00:00.000Z"
    }
  ]
}


```

### /api/todos
#### create new todo

```
POST /api/todos

{
  "todo": "
}

```

### /api/todos/:id
#### update todo

```
PUT /api/todos/:id

{
  "todo": "
}

```

### /api/todos/:id
#### delete todo

```
DELETE /api/todos/:id

```
