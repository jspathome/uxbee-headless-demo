
export class EventModel{
    Id : string = "";
    Title : string= "";
    city: string ="";
    Description : string = "";
    Image : string= "";
    emails_registered: string[] = [];
    test: number= 22

    constructor(id : string,title : string,description : string, image : string, city: string){
        this.Id = id;
        this.Title= title;
        this.Description = description;
        this.Image = image;
        this.city = city;
    }

}