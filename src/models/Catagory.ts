export class Catagory{
    Id : string = "";
    Title : string= "";
    Description : string = "";
    Image : string= "";
    
    constructor(id : string,title : string,description : string, image : string){
        this.Id = id;
        this.Title= title;
        this.Description = description;
        this.Image = image;
    }

}
