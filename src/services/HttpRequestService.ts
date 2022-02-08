/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

export type HttpRequestServiceProps ={
  get: (id?: number) => Promise<Response>,
  post<T>(body: T): Promise<Response>,
  patch<T>(body: T, id: number): Promise<Response>,
  delete: (id:number) => Promise<Response>
}

class HttpRequestService implements HttpRequestServiceProps {
  constructor(public baseUrl: string, public resource: string) {
    this.baseUrl = baseUrl;
    this.resource = resource;
  }

  async get(id?: number) {
    const requestOptions = {
      method: 'GET',
    };
    const checkId = id || '';
    return fetch(`${this.baseUrl}/${this.resource}/${checkId}`, requestOptions);
  }

  async post<T>(body: T) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    return fetch(`${this.baseUrl}/${this.resource}/`, requestOptions);
  }

  async patch<T>(body: T, id:number) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };
    return fetch(`${this.baseUrl}/${this.resource}/${id}`, requestOptions);
  }

  async delete(id: number) {
    const requestOptions = {
      method: 'DELETE',
    };
    return fetch(`${this.baseUrl}/${this.resource}/${id}`, requestOptions);
  }
}

export default HttpRequestService;
