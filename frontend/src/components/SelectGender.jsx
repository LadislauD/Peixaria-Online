const SelectGender = ({ getGender, logic, errors }) => {
    return (
        <>
            <select
                className='picker-style w-full p-inputtext'
                name="gender"
                id="gender-id"
                defaultValue={''}
                onChange={e => {
                    getGender(e.target.value)
                    document.getElementById('error-msg-1').style.display = "none";
                }}
                {...logic}
            >
                <option value="" disabled id="0">Gênero</option>
                <option value="M" id="1">Masculino</option>
                <option value="F" id="2">Feminino</option>
            </select>
            {errors}
        </>
    );
}

export default SelectGender;