const AnnualEntitlementUnit = ({
  FormApi,
  updateEntitlement,
  showIrregularPatternWarningLabel
}) => (
  <Row>
    <Col xs={12} sm={4}>
      <RadioBlock
        className="p-2 pt-1 pb-1"
        name="annualEntitlementUnit"
        value="days"
        checked={FormApi.getValue("annualEntitlementUnit") === "days"}
        onChange={FormApi.onChange}
        onBlur={updateEntitlement}
      >
        <div>
          <strong>Days</strong>
        </div>
        <div>
          <Small muted>0.5 day increments</Small>
        </div>
      </RadioBlock>
    </Col>
    {showIrregularPatternWarningLabel && <span>Stuff went wrong</span>}
  </Row>
);
