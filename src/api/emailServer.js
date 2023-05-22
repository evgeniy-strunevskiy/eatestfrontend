import axios from "axios";

export class emailServer {
  static async addEmail(email) {
    const response = await axios.post('https://reqbin.com/echo/post/jsons', email);
    return response.data;
  }
  }