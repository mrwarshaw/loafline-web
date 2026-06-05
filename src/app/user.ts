export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    approved: boolean;
    requestedAt: Date;
    rejected: boolean;
    actionedAt: Date;
    isInstanceAdmin: boolean;
    isGlobalAdmin: boolean;
}
