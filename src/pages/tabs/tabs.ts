import { Component, Type } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: Type<HomePage> = HomePage;
  tab2Root: Type<AboutPage> = AboutPage;
  tab3Root: Type<ContactPage> = ContactPage;
}
