const ProgressSteps = ({ 
    steps = [], 
    currentIndex, 
    currentId, 
    ...props 
}) => (
	<Steps {...props}>
		{steps.map((step, i) => (
			<Step
				key={step.id}
				isComplete={i <= currentIndex}
				isCurrent={i === currentIndex}
			>
				<span>{step.id}</span>
			</Step>
		))}
	</Steps>
);

ProgressSteps.propTypes = {
	visibleFrom: string,
	steps: arrayOf(
		shape({
			id: oneOfType([number, string])
		})
	).isRequired,
	currentId: string.isRequired,
	currentIndex: number.isRequired
};