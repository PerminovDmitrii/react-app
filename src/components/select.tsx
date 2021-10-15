import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {CURRENCY, GENDER, SelectItem} from "../models/basic-info";

type SelectProps = {
    type: string
}

export default function BasicSelect({type}: SelectProps) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };

    const getItems = (type: string) => {
        let props: SelectItem[] = [];
        let items = [];
        switch (type) {
            case 'gender': {
                props = GENDER;
                break;
            }
            case  'currency': {
                props = CURRENCY;
                break;
            }
            case 'edu': {
                break;
            }
        }
        for (let i = 0; i < props.length; i++) {
            items.push( <MenuItem key={i} value={props[i].value}>{props[i].text}</MenuItem> );
        }
        return items;
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">{type}</InputLabel>
                <Select
                    labelId="select-label"
                    id="select"
                    value={value}
                    label="Value"
                    onChange={handleChange}
                >
                    { getItems(type) }
                </Select>
            </FormControl>
        </Box>
    );
}
