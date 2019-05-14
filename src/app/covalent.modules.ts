import { NgModule } from '@angular/core';

import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';
import { CovalentSearchModule } from '@covalent/core/search';

const MODULES = [CovalentBreadcrumbsModule,CovalentSearchModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class CovalentComponentModules { }