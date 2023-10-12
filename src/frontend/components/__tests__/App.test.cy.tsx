import React from 'react';
import { ProviderMock } from '@mocks';
import App from '@components/App';

describe('Testing Card Component', () => {
	beforeEach(() => {
		cy.mount(
			<ProviderMock>
				<App />
			</ProviderMock>
		);
	});
	it('Show Text', () => {
		cy.get('div').contains('List App');
	});
});
