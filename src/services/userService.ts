import API from "../api/apiProvider";
import { User } from "../types";

class UserService extends API {
  constructor() {
    super("https://jsonplaceholder.typicode.com");
  }

  async getUsers(): Promise<User[]> {
    return this.get("/users");
  }

  async addUser(user: User): Promise<User> {
    return this.post("/users", user);
  }

  async updateUser(id: number, user: User): Promise<User> {
    return this.put(`/users/${id}`, user);
  }

  async deleteUser(id: number): Promise<void> {
    return this.remove(`/users/${id}`);
  }
}

export default new UserService();
