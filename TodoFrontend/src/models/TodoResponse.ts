export interface TodoResponse {
    message: string;
    status:  string;
    code:    string;
    details: Details;
}

export interface Details {
    todo: TodoDetails[];
}

export interface TodoDetails {
    id:         number;
    systemDate: Date;
    subject:    string;
    done:       boolean;
}
