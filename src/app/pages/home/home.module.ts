// Angular modules
import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';

// Internal modules
import { SharedModule }      from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent }     from './home.component';
import { ProgressCircleComponent } from "../../shared/components/blocks/progress-circle/progress-circle.component";

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        ProgressCircleComponent
    ]
})
export class HomeModule { }
