import { NgModule } from '@angular/core';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatTreeModule, MatFormFieldModule,
} from '@angular/material';


const MODULES = [MatGridListModule, MatCardModule, MatMenuModule,MatSnackBarModule, MatIconModule,
                 MatButtonModule,MatFormFieldModule,MatProgressSpinnerModule,MatInputModule,
                 MatProgressBarModule,MatCheckboxModule,MatSelectModule,MatDatepickerModule,
                 NgxMaterialTimepickerModule,MatSidenavModule,MatListModule,MatBadgeModule,
                 MatToolbarModule,MatNativeDateModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class angularMaterialModules { }