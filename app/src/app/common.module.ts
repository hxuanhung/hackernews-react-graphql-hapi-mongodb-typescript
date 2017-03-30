import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { FormsModule } from '@angular/forms';
let hostname = '51.15.130.177';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'production' === ENV ? `http://${hostname}:8765/graphql` : 'http://localhost:8765/graphql'
	}),
});

export function provideClient(): ApolloClient {
	return client;
}

export const IMPORTS: any[] = [
	MaterialModule,
	FormsModule
];

export const EXPORTS: any[] = [
	MaterialModule,
	FormsModule
];

@NgModule({
	imports: IMPORTS,
	exports: EXPORTS,
	providers: [],
})
export class CommonModule { }
