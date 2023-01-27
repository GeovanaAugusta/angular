import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router
    ) {

  }

  ngOnInit(): void {
    // Params da própria rota
    this.activatedRoute.params.subscribe(
      res => console.log(res?.['id'], res?.['username'], res)
    )

    // Pega mais params como ? = etc
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    )

    setTimeout( () => {
      // Direciona direto sem reload
      this.router.navigate(['404']);
      
      // this.router.navigateByUrl('404');
      // Direciona com reload
    }, 5000)

  }

}
