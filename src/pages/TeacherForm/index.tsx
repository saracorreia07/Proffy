import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="So awesome that you want to teach!"
                description="The first step consists in filling the form below." />

            <main>
                <fieldset>
                    <legend>Your information</legend>
                    <Input name="name" label="Full name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>About the class</legend>

                    <Select
                        name="subject"
                        label="Subject"
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Biology', label: 'Biology' },
                            { value: 'Sciences', label: 'Sciences' },
                            { value: 'Sports', label: 'Sports' },
                            { value: 'Physics', label: 'Physics' },
                            { value: 'Geography', label: 'Geography' },
                            { value: 'History', label: 'History' },
                            { value: 'Maths', label: 'Maths' },
                            { value: 'Portuguese', label: 'Portuguese' },
                            { value: 'Chemistry', label: 'Chemistry' }
                        ]} />
                    <Input name="cost" label="Price per Hour" />
                </fieldset>

                <fieldset>
                    <legend>
                        Available hours
                        <button type="button">+ New hour</button>
                    </legend>

                    <div className="schedule-item"></div>
                    <Select name="week_day"
                        label="Week day"
                        options={[
                            { value: '0', label: 'Sunday' },
                            { value: '1', label: 'Monday' },
                            { value: '2', label: 'Tuesday' },
                            { value: '3', label: 'Wednesday' },
                            { value: '4', label: 'Thursday' },
                            { value: '5', label: 'Friday' },
                            { value: '6', label: 'Saturday' }
                        ]} />
                    <Input name="from" label="From" type="time" />
                    <Input name="to" label="to" type="time" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning" />
                        Important! <br />
                        Fill in all the fields
                    </p>
                    <button type="button">
                        Save
                    </button>
                </footer>
            </main>
        </div>

    );
}

export default TeacherForm;