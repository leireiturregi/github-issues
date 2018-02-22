import { Component, OnInit } from '@angular/core';
import { SearchIssuesService } from '../search-issues.service';


@Component({
  selector: 'app-search-issues',
  templateUrl: './search-issues.component.html',
  styleUrls: ['./search-issues.component.css']
})
export class SearchIssuesComponent implements OnInit {

  urlrepository: string;

  results: any[] = [];
  error_text: string = "";

  constructor(private searchService: SearchIssuesService) { }

  ngOnInit() {
  }

  search(urlrepository:string) {

    this.urlrepository = urlrepository;

    //console.log(this.username, this.repository);

    this.searchService.getIssuesByURL(urlrepository).subscribe(
        issues => {
          this.results = issues;
        },
        error => {
          this.results = [];
          this.error_text = "Sorry! No Issues found. Try again";
          console.error(error);
        }
      )
  }

}





