const FirstNameField = ({ FormApi }) => (
	<Fieldset>
		<Label htmlFor="firstName">First name</Label>
		<React.Fragment>
			<Input
				id="firstName"
				name="firstName"
				onChange={FormApi.onChange}
				onBlur={FormApi.onBlur}
				value={FormApi.getValue('firstName')}
			/>
			<Validation visible={FormApi.hasError('firstName')}>
				{FormApi.getError('firstName')}
			</Validation>
		</React.Fragment>
	</Fieldset>
);