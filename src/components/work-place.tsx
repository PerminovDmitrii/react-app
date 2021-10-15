import React from "react";
import {useForm, Controller} from "react-hook-form";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import {Radio} from "@mui/material";
import WorkInfoInt from "../models/work-experience";

interface Props {
    getWorkPlace: (data: WorkInfoInt) => void;
    workExp: string;
}

export default function WorkPlace({getWorkPlace, workExp}: Props) {
    const { register, handleSubmit, control, formState: { errors }} = useForm<WorkInfoInt>({

    });

    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);
    const [untilNow, setUntilNow] = React.useState<string>('false');

    const onSubmit = (formValues: WorkInfoInt): void => {
        getWorkPlace(formValues)
    };

    const handleDate = (val: Date | null): void => {
        console.log(val)
    }

    if (workExp === 'true') {
        return (
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Beginning of work
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                    <DatePicker
                                        {...register("startDate")}
                                        views={['year', 'month']}
                                        label="Begin"
                                        minDate={new Date('1990-01-01')}
                                        maxDate={new Date()}
                                        value={startDate}
                                        onChange={(newValue) => {
                                           setStartDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </label>
                        <label>End of work
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}>
                                    <DatePicker
                                        {...register("endDate")}
                                        views={['year', 'month']}
                                        label="End"
                                        minDate={new Date('1990-01-01')}
                                        maxDate={new Date()}
                                        value={endDate}
                                        onChange={(newValue) => {
                                            setEndDate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} helperText={null} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </label>
                        <label>or until now
                            <Radio
                                {...register("untilNow")}
                                checked={untilNow === "true"}
                                defaultValue="false"
                                value="true"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': "false" }}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Company name
                            <input type="text" {...register("companyName")}/>
                        </label>
                    </div>
                    <div>
                        <label>Position
                            <input type="text" {...register("position")}/>
                        </label>
                        <label>Responsibilities
                            <input type="text" {...register("responsibilities")}/>
                        </label>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    } else {
        return <div></div>
    }
}
