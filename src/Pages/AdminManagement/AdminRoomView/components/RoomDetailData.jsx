import DateFormatS from './DateFormartS';

export function RoomDetailData({ data }) {
    const results = data.map((props) => (
        <tr key={props.id}>
            <td>{props.rank}</td>
            <td>{props.name}</td>
            <td>{props.score}</td>
            <td>{props.execution}</td>
            <td>{DateFormatS(props.time)}</td>
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
