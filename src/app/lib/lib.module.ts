import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  exports: [
    NzRateModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    ToastrModule,
  ],
})
export class LibModule {}
