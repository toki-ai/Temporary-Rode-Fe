import DateFormatS from './DateFormartS';

export function RoomDetailData({ data, quesId }) {
    const results = data.map((props, i) => (
        <tr key={props.account.id}>
            <td>{i + 1}</td>
            <td>{quesId == 'All' ? props.account.fullname : props.id}</td>
            <td>
                {quesId == 'All' ? props.totalScore : props.score}
                {props.score}
            </td>
            <td>{quesId == 'All' ? props.totalSpace : props.space}</td>
            <td>{quesId == 'All' ? DateFormatS(props.totalTime) : DateFormatS(props.time)}</td>
        </tr>
    ));
    const content = results?.length ? (
        results
    ) : (
        <tr>
            <td className="text-center" colSpan={1000}>
                No data available in table
            </td>
        </tr>
    );
    return <>{content}</>;
}
