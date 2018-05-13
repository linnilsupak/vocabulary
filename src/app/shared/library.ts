export class Library {
    id?:	string;
    name: string;
    private: boolean;
    ownerId: string;
    ownerName: string;
    description: string;
    createdAt: string;
    
    // constructor();
    constructor(obj?: any) {
        this.id = obj && obj.id;
        this.name = obj && obj.name || 'test';
        this.description = obj && obj.description || '';
        this.private = obj && obj.private || true;
        this.ownerId = obj && obj.ownerId;
        this.ownerName = obj && obj.ownerName || '';
        this.createdAt = obj && obj.createdAt || (new Date()).toUTCString;
    }

    setPrivate(){
        this.private = true;
    }
    setPublic(){
        this.private = false;
    }
}
