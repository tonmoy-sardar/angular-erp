import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'company' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'company', loadChildren: './company/company.module#CompanyModule' },
            { path: 'purchase-organization', loadChildren: './purchase-organization/purchase-organization.module#PurchaseOrganizationModule' },
            { path: 'purchase-group', loadChildren: './purchase-group/purchase-group.module#PurchaseGroupModule' },
            { path: 'sale-organization', loadChildren: './sale-organization/sale-organization.module#SaleOrganizationModule' },
            { path: 'sale-group', loadChildren: './sale-group/sale-group.module#SaleGroupModule' },
            { path: 'purchase-requisition', loadChildren: './purchase-requisition/purchase-requisition.module#PurchaseRequisitionModule' },
            { path: 'purchase-orders', loadChildren: './purchase-orders/purchase-orders.module#PurchaseOrdersModule' },
            { path: 'states', loadChildren: './states/states.module#StatesModule' },
            { path: 'gst-rates', loadChildren: './gst-rates/gst-rates.module#GstRatesModule' },
            { path: 'terms-condition', loadChildren: './terms-condition/terms-condition.module#TermsConditionModule' },
            { path: 'transport', loadChildren: './transport/transport.module#TransportModule' },
            { path: 'banks', loadChildren: './banks/banks.module#BanksModule' },
            { path: 'department', loadChildren: './department/department.module#DepartmentModule' },
            { path: 'designation', loadChildren: './designation/designation.module#DesignationModule' },
            { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule' },
            { path: 'grn', loadChildren: './grn/grn.module#GrnModule' },
            { path: 'grn-reverse', loadChildren: './grn-reverse/grn-reverse.module#GrnReverseModule' },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
            { path: 'purchase-invoice', loadChildren: './purchase-invoice/purchase-invoice.module#PurchaseInvoiceModule' },
            { path: 'material', loadChildren: './material/material.module#MaterialModule' },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
