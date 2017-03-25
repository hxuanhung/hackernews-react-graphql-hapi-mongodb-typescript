import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GetAllGif = gql`
  query getAllGif {
      getAll{
           _id
        text
  }
}
`;

@Component({
    selector: 'home',
    providers: [
        Title
    ],
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    // Set our default values
    public localState = { value: '' };
    // TypeScript public modifiers
    constructor(
        public appState: AppState,
        public title: Title,
        private apollo: Apollo
    ) { }

    public ngOnInit() {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
        this.apollo.watchQuery({
            query: GetAllGif
        }).subscribe(({ data }) => {
            console.log('Get data', data);
        });
    }

    public submitState(value: string) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    }
}
