class HeaderDayPickerPanel extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      selectedDay: props.selectedDates.from,
      month: date()
        .month(props.month)
        .year(props.year)
        .toDate(),
      range: {
        from: props.selectedDates.from,
        to: props.selectedDates.to
      }
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.selectedDates.from !== prevState.range.from ||
      nextProps.selectedDates.to !== prevState.range.to
    ) {
      return { range: nextProps.selectedDates };
    }
    return null;
  }

  setMonthYear(day) {
    this.setState({ month: day });
    this.props.setMonth(date(day).month());
    this.props.setYear(date(day).year());
  }
}
