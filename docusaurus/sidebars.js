module.exports = {
	mainSidebar: [
		{
			type: 'category',
			label: 'Getting started',
			items: ['getting-started/introduction', 'getting-started/installation', 'getting-started/basic-usage'],
		},
		{
			type: 'category',
			label: 'API reference',
			items: [
				'api-reference/form-object',
				'api-reference/decorators',
				{
					type: 'category',
					label: 'Extended form controls',
					items: [
						'api-reference/extended-form-controls/extended-form-control',
						'api-reference/extended-form-controls/extended-form-array',
						'api-reference/extended-form-controls/form-store',
					],
				},
			],
		},
		{
			type: 'category',
			label: 'Guides',
			items: [
				'guides/base-form-object',
				'guides/creating-complex-forms',
				'guides/defining-relationship-form-fields',
				'guides/saving-forms',
				'guides/validating-forms',
			],
		},
		'migration-guide',
	],
};
