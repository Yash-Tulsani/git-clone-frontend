import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';

const Status = () => {
    
    const [applicationType, setApplicationType] = useState('');
    const [applicationId, setApplicationId] = useState();

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null)


    const handleChangeAppType = (event) => {
        setApplicationType(event.target.value);
    };

    const handleChangeAppId = (event) => {
        setApplicationId(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);

            setResult({
                status: "In-Progess"
            })

        }, 2000);
        
    }

    return (
        <div className="h-full">
            <div class="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8">

                { loading ? ( <CircularProgress color='secondary' size={80} className='mt-20' />) : 
                
                
                (
                    result ? (
                        <div className='mt-10 text-xl'>
                            {result.status}
                        </div>
                    ) : (<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-xl rounded border-2 border-black p-5">
                    <form class="space-y-6" onSubmit={handleSubmit} >
                        <div>
                        
                            <label for="email" class="block text-md font-medium leading-6 text-gray-900 mb-2">Type of Application</label>
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    value={applicationType}
                                    onChange={handleChangeAppType}
                                    required
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    sx={{ border: '1px solid #F58F3C', borderRadius: '7px' }}
                                >
                               
                                    <MenuItem value={"Service"}>Service Application</MenuItem>
                                    <MenuItem value={"WDC"}>WDC Application</MenuItem>
                    
                                </Select>
                    
                            </FormControl>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-md font-medium leading-6 text-gray-900">Application Id</label>
                
                            </div>
                            <div class="mt-2">
                                <input id="application_id" value={applicationId} onChange={handleChangeAppId} name="application_id" type="number" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[#F58F3C] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#F58F3C] sm:text-lg sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center shadow-xl rounded-md bg-[#F58F3C] px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-[rgb(255,170,101)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(255,170,101)]">Submit</button>
                        </div>
                    </form>

                 
                </div>)

                    
                ) }

                
            </div>
        </div>
    );
};

export default Status;
