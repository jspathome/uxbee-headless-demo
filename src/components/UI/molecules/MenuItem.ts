import { randomUUID } from "crypto";

export class MenuItem {
    Id: string;
    Text: string = "";
    HRef: String = "";
    Size: "large"|"small";
    Items : MenuItem[];

    constructor(text: string, href:string, size:"large"|"small" = "large"){
        this.Items = [];
        this.HRef = href;
        this.Size = size;
        this.Text = text;
        this.Id = randomUUID();
    }
}