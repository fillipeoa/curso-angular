import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            { id:1, name:"Lazer", description:"" },
            { id:2, name:"Energia", description:"" },
        ];

        const entries: Entry[] = [
            { id:1, name:"Cinema", categoryId: categories[0].id, category: categories[0], paid: false, date: "28/11/2018", amount: "30,00", type: "expense", description: "" } as Entry,
        ];

        return { categories, entries }
    }
}