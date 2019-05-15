it('should add custom items to the options list', () => {
    comp
        .find('Formik')
        .dive()
        .find('HazardForm')
        .prop('onAdd')('custom');

    expect(
        comp
            .find('Formik')
            .dive()
            .find('HazardForm')
            .prop('hazardOptions')
    ).toMatchSnapshot();
});