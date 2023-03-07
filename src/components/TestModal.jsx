import ModalComponent from './Modal';

const ModalContent = {
    id: 1,
    title: 'Example Example Example Example Example Example Example Example',
    body: 'This is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some textThis is some text',
};
export default function TestModal({}) {
    return (
        <>
            <ModalComponent {...ModalContent}></ModalComponent>
        </>
    );
}
