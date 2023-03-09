import { Button } from 'react-bootstrap';

const ButtonCustom = ({ props }) => {
    return (
        <>
            <Button className={props.className} variant="outline">
                <i className="bi bi-plus"></i>
                {props.text}
            </Button>
        </>
    );
};
export default ButtonCustom;
