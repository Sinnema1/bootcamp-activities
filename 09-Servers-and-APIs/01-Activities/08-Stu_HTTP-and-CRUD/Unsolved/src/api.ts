export interface User {
  first_name: string;
  last_name: string;
  email: string;
  id?: number;
}

class UserAPI {
  // ! Go to https://https://retool.com/api-generator to generate a your own API endpoint
  private REQUEST_URL = "https://api-generator.retool.com/fa3Vj1/users";

  async getAllUsers(): Promise<User[]> {
    const response = await fetch(this.REQUEST_URL); // ? Fetch defaults to GET
    const users = await response.json();
    console.log(users);
    return users;
  }

  async createUser(user: User) {
    const response = await fetch(this.REQUEST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return response;
  }

  async updateUser(user: User) {
    // TODO: Implement this method
    const response = await fetch(`${this.REQUEST_URL}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response;
  }

  async deleteUser(userId: number) {
    // TODO: Implement this method
    await fetch(`${this.REQUEST_URL}/${userId}`, {
      method: "DELETE",
    });
  }

  async getUser(userId: number): Promise<Response> {
    const response = await fetch(`${this.REQUEST_URL}/${userId}`);
    return response;
  }
}
const userAPI = new UserAPI();
export { userAPI };
