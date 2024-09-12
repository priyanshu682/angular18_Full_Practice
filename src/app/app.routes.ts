import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './component/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './component/attribute-directives/attribute-directives.component';
import { IfControlFlowComponent } from './component/if-control-flow/if-control-flow.component';
import { ForControlFlowComponent } from './component/for-control-flow/for-control-flow.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { FormsTemplatesComponent } from './component/forms-templates/forms-templates.component';
import { ReactiveFormsComponent } from './component/reactive-forms/reactive-forms.component';
import { GetApiComponent } from './component/api_integration/get-api/get-api.component';
import { PostApiComponent } from './component/api_integration/post-api/post-api.component';
import { LifecycleEventComponent } from './component/lifecycle-event/lifecycle-event.component';
import { NgTemplateComponent } from './component/ng-template/ng-template.component';
import { NgContainerComponent } from './component/ng-container/ng-container.component';
import { ViewChildComponent } from './component/view-child/view-child.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { SignalComponent } from './component/signal/signal.component';
import { authChildGuard } from './service/auth-child.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    // canActivateChild:[authChildGuard],
    children:[
      {
        path:'add-employee',
        component:AddEmployeeComponent
      },
      {
        path: 'forms-templates',
        component: FormsTemplatesComponent
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      },
      {
        path: 'data-binding',
        component: DataBindingComponent
      },
      {
        path: 'structural-directives',
        component: StructuralDirectivesComponent
      },
      {
        path: 'attribute-directives',
        component: AttributeDirectivesComponent,

      },
      {
        path: 'if-control-flow',
        component: IfControlFlowComponent,
      },
      {
        path: 'for-control-flow',
        component: ForControlFlowComponent
      },
      {
        path: 'pipe',
        component: PipeComponent,
        // canActivate:[authGuard]
      },
      {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
      },
      {
        path: 'get-api',
        component: GetApiComponent
      },
      {
        path: 'post-api',
        component: PostApiComponent
      },
      {
        path: 'lifecycle-event',
        component: LifecycleEventComponent
      },
      {
        path: 'ng-template',
        component: NgTemplateComponent

      },
      {
        path: 'ng-container',
        component: NgContainerComponent
      },
      {
        path: 'view-child',
        component: ViewChildComponent
      },
      {
        path:'signal',
        component: SignalComponent
      }

    ]
  }

];
