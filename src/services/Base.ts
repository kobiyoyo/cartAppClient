/* eslint-disable no-unused-vars */
import HttpRequestService, { HttpRequestServiceProps } from './HttpRequestService';
import { baseUrl } from '../config/baseUrl';

class BaseService {
  constructor(public resource: string, public http: HttpRequestServiceProps) {
    this.http = (new HttpRequestService(baseUrl, resource));
  }

  async getAll() {
    try {
      const response = await this.http.get();
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async get(id:number) {
    try {
      const response = await this.http.get(id);
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async create<T>(body: T) {
    try {
      const response = await this.http.post(body);
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async update<T>(body: T, id: number) {
    try {
      const response = await this.http.patch(body, id);
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async delete(id: number) {
    try {
      const response = await this.http.delete(id);
      return await response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
export default BaseService;
