import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { TouchspinComponent } from './form-widgets/touchspin/touchspin.component';
import { Select2Component } from './form-widgets/ngselect/select2.component';
import { SwitchComponent } from './form-widgets/switch/switch.component';
import { ClipboardComponent } from './form-widgets/clipboard/clipboard.component';
import { FormWizardComponent } from './form-Layouts/form-wizard/form-wizard.component';
import { DefaultFormComponent } from './form-Layouts/default-form/default-form.component';
import { FormWizardTwoComponent } from './form-Layouts/form-wizard-two/form-wizard-two.component';
import { FormWizardThreeComponent } from './form-Layouts/form-wizard-three/form-wizard-three.component';
import { FormWizardFourComponent } from './form-Layouts/form-wizard-four/form-wizard-four.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "form-controls",
        children: [
          {
            path: 'validation',
            component: FormValidationComponent,
            data: {
              title: "Validation",
              breadcrumb: "Validation"
            }
          },
          {
            path: 'inputs',
            component: BaseInputsComponent,
            data: {
              title: "Base Inputs",
              breadcrumb: "Base Inputs "
            }
          },
          {
            path: 'checkbox-radio',
            component: CheckboxRadioComponent,
            data: {
              title: "Checkbox-Radio",
              breadcrumb: "Checkbox-Radio"
            }
          },
          {
            path: 'input-groups',
            component: InputGroupsComponent,
            data: {
              title: "Input Groups",
              breadcrumb: "Input Groups"
            }
          },
          {
            path: 'mega-options',
            component: MegaOptionsComponent,
            data: {
              title: "Mega Options",
              breadcrumb: "Mega Options"
            }
          },
        ],
        data: {
          title: "Form Controls",
          breadcrumb: "Form Controls"
        }
      },
      {
        path: "form-widgets",
        children: [
          {
            path: "touchspin",
            component: TouchspinComponent,
            data: {
              title: "Touschspin",
              breadcrumb: "Touschspin",
            }
          },
          {
            path: "ngselect",
            component: Select2Component,
            data: {
              title: "NG Select",
              breadcrumb: "NG Select",
            }
          },
          {
            path: "switch",
            component: SwitchComponent,
            data: {
              title: "Switch",
              breadcrumb: "Switch",
            }
          },
          {
            path: "clipboard",
            component: ClipboardComponent,
            data: {
              title: "Clipboard",
              breadcrumb: "Clipboard",
            }
          },
        ],
        data: {
          title: "Form-Widgets",
          breadcrumb: "Form-Widgets"
        }
      },
      {
        path: "form-layout",
        children: [
          {
            path: "default-form",
            component: DefaultFormComponent,
            data: {
              title: "Default Forms",
              breadcrumb: "Default Forms",
            }
          },
          {
            path: "form-wizard",
            component: FormWizardComponent,
            data: {
              title: "Form-wizard",
              breadcrumb: "Form-wizard",
            }
          },
          {
            path: "form-wizard-two",
            component: FormWizardTwoComponent,
            data: {
              title: "Form wizard 2",
              breadcrumb: "Form wizard 2",
            }
          },
          {
            path: "form-wizard-three",
            component: FormWizardThreeComponent,
            data: {
              title: "Form wizard 3",
              breadcrumb: "Form wizard 3",
            }
          },
          {
            path: "form-wizard-four",
            component: FormWizardFourComponent,
            data: {
              title: "Form wizard 4",
              breadcrumb: "Form wizard 4",
            }
          },
        ],
        data: {
          title: "Form-Layout",
          breadcrumb: "Form-Layout"
        }
      }
    ],
    data: {
      title: "Forms",
      breadcrumb: "Forms"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
