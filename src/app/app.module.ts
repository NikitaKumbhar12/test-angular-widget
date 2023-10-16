import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyWebComponentComponent } from './my-web-component/my-web-component.component';

@NgModule({
  declarations: [AppComponent, MyWebComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [MyWebComponentComponent],
})
export class AppModule {
   constructor(private injector: Injector) {
    const componentElement = createCustomElement(MyWebComponentComponent, {
      injector,
    });
    customElements.define('my-web-component', componentElement);
  }

  ngDoBootstrap() {}
}
