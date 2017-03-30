import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
let hostname = 'localhost';
if (process.env.KARMA_HOSTNAME) {
	hostname = process.env.KARMA_HOSTNAME;
}

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'production' === ENV ? `http://${hostname}:8765/graphql` : 'http://localhost:8765/graphql'
	}),
});

export function provideClient(): ApolloClient {
	return client;
}

export const IMPORTS: any[] = [
	MaterialModule
];

export const EXPORTS: any[] = [
	MaterialModule
];

@NgModule({
	imports: IMPORTS,
	exports: EXPORTS,
	providers: [],
})
export class CommonModule { }
