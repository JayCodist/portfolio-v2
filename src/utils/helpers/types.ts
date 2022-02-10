export type ErrorResponse = {
  error?: boolean;
  message?: string;
};

export interface RequestResponse<T> extends ErrorResponse {
  data: T | null;
}

export interface IssuerCreationData {
  organizationName: string;
  username: string;
  userRole: string;
  hostDomain: string;
  apiPath: string;
  basicAuthToken: string;
}

export interface IssuerUpdateData extends IssuerCreationData {
  id: number;
}

export interface Issuer extends IssuerCreationData {
  id: number;
  issuerId: string;
  secretKey: string;
}
