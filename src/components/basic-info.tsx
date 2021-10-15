import React from 'react';
import BasicInfoInt from "../models/basic-info";
import {useForm, Controller} from "react-hook-form";
import BasicSelect from "./select";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from "./date-picker";


interface Props {
    updateBasic: (data: BasicInfoInt) => void;
    updateStage: (nextStage: string) => void;
}

export default function BasicInfo({updateBasic, updateStage}: Props) {

    const validationSchema = Yup.object().shape({
        surname: Yup.string().required('Surname is required'),
        name: Yup.string().required('Name is required'),
        city: Yup.string().required('City of residence is required'),
        // birthdate: Yup.date().required('Birthdate is required'),
        // gender: Yup.string().required('Gender is required'),
        ctznShip: Yup.string().required('Citizenship is required'),
        careerObj: Yup.string().required('Career objective is required'),
        // currency: Yup.string().required('Currency is required'),
        salary: Yup.string().required('Salary is required')
    });

    const { register, handleSubmit, control, formState: { errors }} = useForm<BasicInfoInt>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (formValues: BasicInfoInt) => {
        updateBasic(formValues);
        updateStage('workExp');
    };

    const selectTypes = {
        gender: 'gender',
        currency: 'currency',
    }

    return (
        <div>
            <h1>Basic information</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="form-group">
                        <label>Photo</label>
                        <input type="file" {...register("photo")}/>
                    </div>
                    <div className="form-group">
                        <label>Surname
                            <span className="validation-flag">*</span>
                        </label>
                        <input type="text"
                               className={`form-control ${errors.surname ? 'is-invalid' : ''}`}
                               {...register("surname")}
                        />
                        {errors.surname && <p>{errors.surname.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Name
                            <span className="validation-flag">*</span>
                        </label>
                        <input type="text"
                               className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                               {...register("name")}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Patronymic</label>
                        <input type="text" {...register("patronymic")}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label>City of residence
                            <span className="validation-flag">*</span>
                        </label>
                        <input type="text"
                               className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                               {...register("city")}
                        />
                        {errors.city && <p>{errors.city.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Birth date
                            <span className="validation-flag">*</span>
                        </label>
                        <Controller
                            control={control}
                            name="birthdate"
                            render={() => (
                               <DatePicker />
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender
                            <span className="validation-flag">*</span>
                        </label>
                        <Controller
                            control={control}
                            name="gender"
                            render={() => (
                                <BasicSelect type={selectTypes.gender} />
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <label>Citizenship
                            <span className="validation-flag">*</span>
                        </label>
                        <input type="text"
                               className={`form-control ${errors.ctznShip ? 'is-invalid' : ''}`}
                               {...register("ctznShip")}
                        />
                        {errors.ctznShip && <p>{errors.ctznShip.message}</p>}
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label>Career objective
                            <span className="validation-flag">*</span>
                        </label>
                        <input type="text"
                               className={`form-control ${errors.careerObj ? 'is-invalid' : ''}`}
                               {...register("careerObj")}
                        />
                        {errors.careerObj && <p>{errors.careerObj.message}</p>}
                    </div>
                    <div className="form-group">
                        <label>Currency
                            <span className="validation-flag">*</span>
                        </label>
                        <Controller
                            control={control}
                            name="currency"
                            render={() => (
                                <BasicSelect  type={selectTypes.currency}/>
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <label>Salary
                            <span className="validation-flag">*</span>
                        </label>
                        <input type="text"
                               className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                               {...register("salary")}
                        />
                        {errors.salary && <p>{errors.salary.message}</p>}
                    </div>
                </div>
                <div className="form-group">
                    <label>About yourself</label>
                    <input type="text" {...register("about")}/>
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    );
}

