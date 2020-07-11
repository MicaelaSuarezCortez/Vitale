
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        PagenofoundComponent
    ],
    exports: [
         FooterComponent,
        HeaderComponent,
        PagenofoundComponent
    ],
})

export class SharedModule {}