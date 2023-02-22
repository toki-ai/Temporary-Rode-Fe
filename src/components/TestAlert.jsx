import AlertSuccess from "./AlertSuccess";
const Alerts = { id: 1, title: "Successfully", body: "This is an example test with link" }
export default function TestAlert() {
    return (
        <>
            <AlertSuccess {...Alerts}></AlertSuccess>
        </>
    );
}