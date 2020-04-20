import { Injectable, Injector } from '@angular/core';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { CategoryService } from '../../categories/shared/category.service';
import { Entry } from "./entry.model";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector, private categoryService: CategoryService) { 
    super("api/entraies", injector, Entry.fromJson)
  }

  create(entry: Entry): Observable<Entry>{
    return(this.setCategoryAndSendToServer(entry, super.create.bind(this)))
  }
//.BIND(THIS) É IMPORTANTE
  update(entry: Entry): Observable<Entry>{
    return this.setCategoryAndSendToServer(entry, super.update.bind(this))
  }

  private setCategoryAndSendToServer(entry: Entry, sendFn: any): Observable<any>{
     return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return sendFn(entry);
      })
    )
  }
}
