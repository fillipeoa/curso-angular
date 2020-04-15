import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            { id:1, name:"Lazer", description:"" },
            { id:2, name:"Energia", description:"" },
        ];
        return { categories }
    }
}