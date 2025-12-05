# feat(user): 

### 🚀 Objetivo


---

### 🛠️ Alterações e Arquitetura

As alterações foram distribuídas nas seguintes camadas (Arquitetura Service/Repository/Controller):

* **Rotas/Controller (`http/controllers`):** Adicionada a rota `POST /users` para receber dados de registro.
* **Serviço (`users/register-service.ts`):** Implementada a lógica de criação e as validações de negócio.
* **Repositório:** Criada a classe `PrismaUsersRepository` e adicionados os métodos `create` e `findByEmail` para interagir com o banco de dados.
* **Tipagem:** Definidas as interfaces (`users-repository.d.ts`) que garantem o princípio de Inversão de Dependência (DIP) no Service.
* **Tratativa de Erros:** Introduzido o `UserAlreadyExistsError.ts` para tratamento de erros específicos de negócio.

### 🔒 Regras de Negócio Garantidas

Certifique-se de que as seguintes validações foram implementadas:

* [x] **Regra:** Descrição da regra.

### 🧪 Como Testar

Para testar a funcionalidade e as regras de negócio:

1.  **Endpoint:** `POST /users`
2.  **Corpo da Requisição (Exemplo):**

```json
```

### 🧪 Como Testar

Para testar a funcionalidade e as regras de negócio:

1.  Garanta que o servidor está rodando.
2.  Envie requisições para o endpoint `/users`.

| Cenário | Método | Endpoint | Status Esperado |
| :--- | :--- | :--- | :--- |
| **Sucesso** | `POST` | `/users` | `201 Created` |
| **E-mail Duplicado** | `POST` | `/users` | `409 Conflict` (ou `400 Bad Request`) |
