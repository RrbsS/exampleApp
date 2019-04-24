export class Book {
    ID:number;
    Title:string;
    Description:string;
    PageCount:number;
    Excerpt:string;
    PublishDate:any;

    constructor(init?: Partial<Book>){
        if(init)
        {
            Object.assign(this, init);
        }
        else
        {
            this.ID = 0;
            this.Title = "";
            this.Description = "";
            this.Excerpt = "";
            this.PageCount = 0;
            this.PublishDate  = new Date();
        }
        
    }
}
