import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSaleComponent } from './new-sale.component';
import { FormRoutingModule } from '../form/form-routing.module';
import { PageHeaderModule } from 'src/app/shared';
import { FormComponent } from '../form/form.component';
import { ProductsService } from 'src/app/service/products.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, NgbModule],
    declarations: [FormComponent, ]
})
export class NewSaleModule { }
