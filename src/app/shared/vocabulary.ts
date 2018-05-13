export class Vocabulary {
    id:	string
    categoryId: string
    vocabulary: string
    meaning: string
    createdAt: string

    constructor();
    // constructor(categoryId: string); 
    constructor(obj?: any) {
        this.id = obj && obj.id;
        this.categoryId = obj && obj.categoryId;//categoryId
        this.vocabulary = obj && obj.vocabulary || '';
        this.meaning = obj && obj.meaning || '';
        this.createdAt = obj && obj.createdAt || (new Date()).toUTCString;
    }
}
