import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobsService } from 'src/services/jobs.service';
import { Job } from 'src/models/Job';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit, OnDestroy {

  api_base_url: string = environment.api_base_url;
  isloading: boolean;
  job: Job;
  routeSubscription: Subscription;

  constructor(private jobsService: JobsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Load job on route change
    this.routeSubscription = this.route.paramMap.subscribe( paramMap => {
      this.isloading = true;
      this.jobsService.fetch(paramMap.get('jobId')).subscribe(
        (job) => {
          this.job = job;
          this.isloading = false;
        }
      );
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
