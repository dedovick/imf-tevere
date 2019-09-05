import { MatStepperModule } from '@angular/material/stepper';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NewSaleComponent } from './new-sale/new-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './components/modal/stepper/stepper.component';
import {
    MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule
} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        NgbModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule
    ],
    exports: [MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, NewSaleComponent, StepperComponent]
})
export class LayoutModule { }
