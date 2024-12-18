const MonthPicker = ({ monthPicked, logic }) => {
    const months = ["Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]

    return (
        <select
            className='picker-style p-inputtext'
            {...logic}
            name="month"
            id="monthId"
        >
            {
                months.map((item, index) => {
                    return (
                        <option
                            value={item}
                            key={index}
                            id={index + 1}
                        >
                            {item}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default MonthPicker;