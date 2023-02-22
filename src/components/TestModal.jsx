const ModalContent = { id: 1, title: "Example", body: "This is some text" }
import ModalComponent from "./Modal"
export default function TestModal({ }) {
    return (
        <>
            <ModalComponent
                {...ModalContent}
            ></ModalComponent>
        </>
    )
}