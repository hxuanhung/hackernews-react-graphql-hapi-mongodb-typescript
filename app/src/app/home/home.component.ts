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
        title
        url
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
	gifs: any[];
	// TypeScript public modifiers
	constructor(
		public appState: AppState,
		public title: Title,
		private apollo: Apollo
	) { }

	public ngOnInit() {
		console.log('hello `Home` component');
		// this.title.getData().subscribe(data => this.data = data);
		this.apollo.watchQuery(
			{
				query: GetAllGif,
				fetchPolicy: "network-only"
			}
		)
			.map(data => data.data)
			.subscribe(data => {
				console.log('Get data', data.getAll);
				this.gifs = data.getAll;
			});
	}

	public submitState(value: string) {
		console.log('submitState', value);
		this.appState.set('value', value);
		this.localState.value = '';
	}
}
