import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {PizzaModule} from './pizza/pizza.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        PizzaModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
