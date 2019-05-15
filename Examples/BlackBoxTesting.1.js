
it('should hide all asssesments', () => {
    comp.find(HideAllButton).prop('onClick')();
    expect(comp.find('row')).toHaveLength(0);
});

it('should delete all assessments', () => {
    comp.find('DeleteAllButton').prop('onClick')();
    expect(comp.find('row')).toHaveLength(0);
})