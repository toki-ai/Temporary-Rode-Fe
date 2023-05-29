import { BootstrapInput } from '../BootstrapInput';

const FormControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <BootstrapInput {...rest} />;

        default:
            return null;
    }
};
export default FormControl;
