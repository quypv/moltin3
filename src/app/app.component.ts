import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // let hello = route.data.map(d => d.hello);
    // console.log(hello);

    

    // router
    //   .events
    //   .filter(e => e instanceof NavigationEnd)
    //   .subscribe((e: NavigationEnd) => {
    //     console.log('e.url', e.url);
    //   });

    router.events
      .filter(e => e instanceof NavigationEnd)
      .forEach(e => {
        console.log(route.root.firstChild.snapshot.data['hello']);
    });

  }

  public ngOnInit() {
    // let routeData= this.route.events.subscribe((data) => {
    //     if (data instanceof RoutesRecognized) {
    //      this.name = data.state.root.firstChild.data.title;
    //     }
    //   });

    // this.route.data.subscribe((data) => {
    //     console.log(data);
    // });
  }
}
