export interface FetchResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface FetchOptions extends Omit<RequestInit, 'headers'> {
  headers?: Record<string, string>;
}
