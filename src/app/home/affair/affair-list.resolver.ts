import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DatabaseApiService } from 'src/app/database-api.service';

@Injectable()
export class AffairsList implements Resolve<null> {

    constructor( public dbService: DatabaseApiService) {

    }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): any {

        console.log('resolver works');
        let offset = route.paramMap.get("from");
        let limit = route.paramMap.get("to");
        this.dbService.getAffairs(offset,limit);
        return null;
    }
    
}
