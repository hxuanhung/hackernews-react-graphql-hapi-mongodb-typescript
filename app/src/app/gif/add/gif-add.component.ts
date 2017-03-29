import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const addGif = gql`
mutation AddGif($title: String!, $url: String!) {
  addGif(title: $title, url: $url) {
    _id
    title
    url
  }
}

`;
@Component({
    selector: 'gif-add',
    templateUrl: 'gif-add.component.html'
})
export class GifAddComponent implements OnInit {
    constructor(
        private apollo: Apollo
    ) { }

    ngOnInit() {

    }

    addGif(_title, _url) {
        console.log(`Add Gif`, _title, _url);
        this.apollo.mutate({
            mutation: addGif,
            variables: {
                title: _title,
                url: _url
            }
        });
        // .then(({ data }) => {
        // 	console.log('got data', data);
        // }).catch((error) => {
        // 	console.log('there was an error sending the query', error);
        // });
    }
}
