import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

import api from '../../services/api';

function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {

        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {

        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Sucessfullllllll');

            history.push('/');
        }).catch(() => {
            alert('ERRRROOOOOR'); 
        });
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="So awesome that you want to teach!"
                description="The first step consists in filling the form below." />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your information</legend>
                        <Input
                            name="name"
                            label="Full name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>About the class</legend>

                        <Select
                            name="subject"
                            label="Subject"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
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

                        <Input
                            name="cost"
                            label="Price per Hour"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Available hours
                        <button type="button" onClick={addNewScheduleItem}>
                                + New hour
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week_day"
                                        label="Week day"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Sunday' },
                                            { value: '1', label: 'Monday' },
                                            { value: '2', label: 'Tuesday' },
                                            { value: '3', label: 'Wednesday' },
                                            { value: '4', label: 'Thursday' },
                                            { value: '5', label: 'Friday' },
                                            { value: '6', label: 'Saturday' }
                                        ]}
                                    />
                                    <Input
                                        name="from"
                                        label="From"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                        name="to"
                                        label="to"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning" />
                        Important! <br />
                        Fill in all the fields
                    </p>
                        <button type="submit">
                            Save
                    </button>
                    </footer>
                </form>
            </main>
        </div >

    );
}

export default TeacherForm;