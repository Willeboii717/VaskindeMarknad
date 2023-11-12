export interface CustomerModel {
    id?: number;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
}

export interface loginCredentialModel {
    username: string;
    password: string;
}