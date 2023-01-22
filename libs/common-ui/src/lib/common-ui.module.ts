import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TableComponent } from './table/table.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DialogComponent } from './dialog/dialog.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SliderComponent } from './slider/slider.component';
import { TabsComponent } from './tabs/tabs.component';
import { TreeComponent } from './tree/tree.component';
import { BadgeComponent } from './badge/badge.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToastComponent } from './toast/toast.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ChipComponent } from './chip/chip.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CheckboxComponent,
    SelectComponent,
    TooltipComponent,
    TableComponent,
    RadioButtonComponent,
    DialogComponent,
    DatepickerComponent,
    DividerComponent,
    ExpansionPanelComponent,
    MenuComponent,
    ProgressBarComponent,
    PaginatorComponent,
    ProgressSpinnerComponent,
    SliderComponent,
    TabsComponent,
    TreeComponent,
    BadgeComponent,
    ToggleComponent,
    ToastComponent,
    CarouselComponent,
    AvatarComponent,
    ChipComponent,
    FormBuilderComponent,
  ],
  exports: [
    CheckboxComponent,
    SelectComponent,
    TooltipComponent,
    TableComponent,
    RadioButtonComponent,
    DialogComponent,
    DatepickerComponent,
    DividerComponent,
    ExpansionPanelComponent,
    MenuComponent,
    ProgressBarComponent,
    PaginatorComponent,
    ProgressSpinnerComponent,
    SliderComponent,
    TabsComponent,
    TreeComponent,
    BadgeComponent,
    ToggleComponent,
    ToastComponent,
    CarouselComponent,
    AvatarComponent,
    ChipComponent,
    FormBuilderComponent,
  ],
})
export class CommonUiModule {}
