import { InputText } from 'primereact/inputtext';
const Name = ({ placeholder, id, logic }) => {
    return (
      <>
        <InputText style={{ width: '200px' }}
          onChange={(e) => {
            e.preventDefault()
          }}
          placeholder={placeholder}
          id={id}
          {...logic}
        />
      </>
    );
  }

export default Name;