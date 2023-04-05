import DateFormatS from './DateFormartS';

export function RoomDetailData({ data, question }) {
    console.log(data);
    const results = data.map((props, index) => (
        <tr key={props.account.id}>
            <td>{index + 1}</td>
            <td>{props.account.fullname}</td>
            <td>{question == 'All' ? props.totalScore : 2}</td>
            <td>{question == 'All' ? props.totalSpace : 2}</td>
            <td>{question == 'All' ? DateFormatS(props.totalTime) : 2}</td>
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
