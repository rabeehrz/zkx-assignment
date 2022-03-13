import axios from 'axios';
import { api } from '../config';

export const apiClient = axios.create({
  baseURL: `/api/${api.key}`,
});
