/* eslint-disable no-unused-vars */
import HttpRequestService, { HttpRequestServiceProps } from './HttpRequestService';
import { baseUrl } from '../helper/baseUrl';

class BaseService {
  private http: HttpRequestServiceProps = new HttpRequestService(baseUrl, this.resource);

  constructor(public resource: string) {
    this.resource = resource;
  }

  async getAll() {
    const response = await this.http.get();
    return response.json();
  }

  async get(id:number) {
    const response = await this.http.get(id);
    return response.json();
  }

  async create<T>(body: T) {
    const response = await this.http.post(body);
    return response.json();
  }

  async update<T>(body: T, id: number) {
    const response = await this.http.patch(body, id);
    return response.json();
  }

  async delete(id: number) {
    const response = await this.http.delete(id);
    return response.json();
  }
}
export default BaseService;
