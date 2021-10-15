import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import WorkInfoInt from "../models/work-experience";
import WorkPlace from "./work-place";


interface Props {
    updateExp: (data: WorkInfoInt[]) => void;
    updateStage: (nextStage: string) => void;
}

export default class WorkExperience extends React.Component<Props, {
    workExp: string;
    data: WorkInfoInt[];
}> {
    constructor(props: Props) {
        super(props);
        this.state = {workExp: 'false', data: []};
    }

    handlerChange = (type: string): void => {
        if (type === 'with') {
            this.setState({workExp: 'true'}) ;
        } else if (type === 'without') {
            this.setState({workExp: 'false'})
        }
    }

    getWorkPlace = (workPlace: WorkInfoInt): void => {
        this.setState(({data}) => {
            { data: data.push(workPlace) };
        })
    }

    render() {
        return (
            <div>
                <h1>Work experience</h1>
                <section>
                    <label>Choose your work experience
                        <RadioGroup>
                            <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="Without work experience"
                                onChange={(e) => this.handlerChange('without')}
                            />
                            <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="With work experience"
                                onChange={(e) => this.handlerChange('with')}
                            />
                        </RadioGroup>
                    </label>
                    <WorkPlace getWorkPlace={this.getWorkPlace} workExp={this.state.workExp}/>
                </section>
            </div>
        );
    }
}
