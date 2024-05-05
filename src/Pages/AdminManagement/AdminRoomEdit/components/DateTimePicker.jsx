import * as React from 'react';
import { useState } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

export default function DateTimePickerValue({ dayApi, setTimeISO: setDateISO, openTime }) {
    const [value, setValue] = React.useState(dayjs(new Date(dayApi)));
    const startDate = dayjs(new Date(new Date(openTime)).getTime() + 60000).startOf('minute');
    const toISOStringDate = (e) => {
        setValue(e);
        let tzoffset = new Date().getTimezoneOffset() * 60000;
        let localISOTime = new Date(new Date(e) - tzoffset).toISOString().slice(0, -1);
        setDateISO(localISOTime);
    };

    const [error, setError] = React.useState(null);

    const errorMessage = React.useMemo(() => {
        switch (error) {
            case 'minDate': {
                return 'Close time must be greater than open time';
            }

            case 'invalidDate': {
                return 'Your date is not valid';
            }

            default: {
                return '';
            }
        }
    }, [error]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} className="fw-light" adapterLocale={'vi'}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                <DateTimePicker
                    value={value}
                    disablePast
                    defaultValue={value}
                    onError={(newError) => setError(newError)}
                    onChange={toISOStringDate}
                    sx={{
                        '& .MuiInputBase-root': {
                            height: 40,
                        },
                        overflow: 'hidden',
                        fontWeight: 400,
                    }}
                    slotProps={{
                        textField: {
                            helperText: errorMessage,
                        },
                    }}
                    minDateTime={startDate}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
