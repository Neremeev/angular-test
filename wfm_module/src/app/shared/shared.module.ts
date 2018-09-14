import {NgModule} from "@angular/core";
import {ColorDirective} from "./color.directive";

// чтобы директива калор работала на все модули
@NgModule({
  declarations: [ColorDirective],
  exports: [ColorDirective]
})
export class SharedModule {

}