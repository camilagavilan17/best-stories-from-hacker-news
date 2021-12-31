import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';

//Components
import { HeaderComponent } from './components/header/header.component';
import { BestStoriesComponent } from './components/best-stories/best-stories.component';
import { TopStoriesComponent } from './components/top-stories/top-stories.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoryComponent } from './components/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BestStoriesComponent,
    TopStoriesComponent,
    PageNotFoundComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
