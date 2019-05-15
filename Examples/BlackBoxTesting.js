
it('should hide all asssesments', () => {
    comp.setState({hideAll: true});
    expect(comp.find('row')).toHaveLength(0);
});

it('should delete all assessments', () => {
    comp.find('DeleteAllButton').prop('onClick')();
    expect(comp.state().assessments).toHaveLength(0);
})