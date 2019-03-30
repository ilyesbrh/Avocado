import { NgModule } from '@angular/core';

import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';

const MODULES = [CovalentBreadcrumbsModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class CovalentComponentModules { }