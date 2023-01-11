import Api from './Api';
import { AxiosPromise } from 'axios';

export class Auth {
  static loginReq = (data: {}): AxiosPromise => Api.post(``, data);
  static logoutReq = (): AxiosPromise => Api.get(``);
}
