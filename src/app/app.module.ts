import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { JobsService } from 'src/services/jobs.service';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Import modules below
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({

      // Disable rich text mardown sanitization
      sanitize: SecurityContext.NONE

    }),
  ],
  providers: [
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
