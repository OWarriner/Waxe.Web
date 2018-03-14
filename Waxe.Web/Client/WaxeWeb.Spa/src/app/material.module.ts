import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatTableModule, MatSidenavModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatCardModule, MatAutocompleteModule, MatGridListModule  } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatTableModule, MatSidenavModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatNativeDateModule, MatInputModule, MatSelectModule, MatCardModule, MatAutocompleteModule, ReactiveFormsModule, MatGridListModule ],
  exports: [MatButtonModule, MatToolbarModule, MatTableModule, MatSidenavModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatNativeDateModule, MatInputModule, MatSelectModule,MatCardModule, MatAutocompleteModule, ReactiveFormsModule, MatGridListModule ],
})
export class MaterialModule { }	