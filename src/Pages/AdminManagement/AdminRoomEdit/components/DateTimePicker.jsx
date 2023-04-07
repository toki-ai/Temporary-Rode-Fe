import * as React from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function DateTimePickerValue({ dayApi }) {
    const [value, setValue] = React.useState(dayjs(dayApi));
    function toTimestamp(strDate) {
        var datum = Date.parse(strDate);
        return datum / 1000;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} className="fw-light" adapterLocale={'vi'}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                <DateTimePicker
                    value={value}
                    defaultValue={dayjs(dayApi)}
                    onChange={(e) => {
                        setValue(e);
                        console.log(e);
                        let date = new Date(e);
                        console.log(date.toISOString());
                    }}
                    sx={{
                        '& .MuiInputBase-root': {
                            height: 40,
                        },
                        overflow: 'hidden',
                        fontWeight: 400,
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
