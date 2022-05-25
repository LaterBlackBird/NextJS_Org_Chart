import styles from '../../styles/Dropdown.module.css';
import Label from '../atoms/Label';
import Select from '../atoms/Select';

const Dropdown = ({ text, value, onChange, testID, name, options }) => {
  return (
    <div className={styles.dropdown}>
      <Label text={text}>
          <Select 
            name={name}
            testID={testID}
            value={value}
            onChange={onChange}
            options={options}
          />
      </Label>
    </div>
  )
}

export default Dropdown