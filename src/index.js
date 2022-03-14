import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

import 'tailwindcss/tailwind.css';

const valid = (values) => {
    if (!values.ticketID) {
        alert('The ticket ID is required!');
        return false;
    }

    if (!values.timezone) {
        alert('The timezone is required!');
        return false;
    }

    if (!values.ign) {
        alert('The Minecraft name is required!');
        return false;
    }

    if (!values.origin) {
        alert('You have to specify the origin name!');
        return false;
    }

    if (!values.origin_desc) {
        alert('The Origin description must be specified!');
        return false;
    }

    return true;
};

const Basic = () => (
    <div className={'bg-gray-400 shadow-sm rounded-md p-8 rounded m-32'}>
        <div
            id="area0"
            className={'bg-gray-100 shadow-sm rounded-md p-8 rounded m-8'}>
            <h1 className={'text-5xl'}>Dark Moon SMP Member Application</h1>
            <p className={'text-base text-xxl'}>
                Use this form to apply as a Member on the Dark Moon SMP. All
                responses will be sent to the staff team. Please always open a
                ticket before filling this out and specify the ticket id.
            </p>
        </div>
        <Formik
            initialValues={{
                ticketID: '',
                timezone: '',
                ign: '',
                nick: 'n.A.',
                age: '13-15',
                hobbies: 'n.A.',
                origin: '',
                origin_desc: '',
                done: false,
                download: 'n.A.',
                active: false,
                rules: false,
                anythingElse: 'n.A.',
            }}
            onSubmit={async (values) => {
                if (valid(values)) {
                    await new Promise((r) => setTimeout(r, 500));
                    await fetch('http://127.0.0.1:8080/v1/submit_application', {
                        method: 'POST',
                        headers: new Headers({
                            'Content-Type': 'application/json',
                        }),
                        body: JSON.stringify(values)
                    });
                }
            }}>
            {({ values }) => (
                <Form>
                    <div
                        id="area1"
                        className={
                            'bg-gray-100 shadow-sm rounded-md p-8 rounded m-8'
                        }>
                        <label htmlFor="ticketID">
                            Your Ticket ID <br />
                            <Field
                                id="ticketID"
                                name="ticketID"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder="0122344567386783"
                            />{' '}
                        </label>
                        <br />

                        <label htmlFor="timezone">
                            What timezone do you live in? <br />
                            <Field
                                id="timezone"
                                name="timezone"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder="GMT+10"
                            />{' '}
                        </label>
                        <br />

                        <label htmlFor="ign">
                            What is your Minecraft name? <br />
                            <Field
                                id="ign"
                                name="ign"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder="PixelAgent007"
                            />{' '}
                        </label>
                        <br />

                        <label htmlFor="nick">
                            How do you want to be called? <br />
                            <Field
                                id="nick"
                                name="nick"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder="Pixel"
                            />{' '}
                        </label>
                        <br />
                    </div>

                    <div
                        id="area2"
                        className={
                            'bg-gray-100 shadow-sm rounded-md p-8 rounded m-8'
                        }>
                        <label htmlFor="age">
                            How old are you? <br />
                            <Field
                                as="select"
                                id="age"
                                name="age"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }>
                                <option value="13-15">13-15</option>
                                <option value="16-18">16-18</option>
                                <option value="18+">18+</option>
                                <option value="No Answer">
                                    I prefer not to answer.
                                </option>
                            </Field>{' '}
                        </label>
                        <br />

                        <label htmlFor="hobbies">
                            What are some of your hobbies except Minecraft? (Not
                            mandatory) <br />
                            <Field
                                as="textarea"
                                rows="5"
                                cols="25"
                                id="hobbies"
                                name="hobbies"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder=""
                            />{' '}
                        </label>
                        <br />

                        <label htmlFor="origin">
                            What origin do you want to play as? <br />
                            <Field
                                id="origin"
                                name="origin"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder=""
                            />{' '}
                        </label>
                        <br />

                        <label htmlFor="origin_desc">
                            What are it's pros/cons? <br />
                            <Field
                                as="textarea"
                                rows="10"
                                cols="50"
                                id="origin_desc"
                                name="origin_desc"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder=""
                            />{' '}
                        </label>
                        <br />

                        <label htmlFor="done">
                            Is it already made? If it isn't, our devs will make
                            it. <br />
                            <Field type="checkbox" name="done" />
                            {`${values.done}`}{' '}
                        </label>
                        <br />

                        <label htmlFor="download">
                            If it's already made, please specify a download
                            link. <br />
                            <Field
                                id="download"
                                name="download"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                placeholder=""
                            />{' '}
                        </label>
                        <br />
                    </div>

                    <div
                        id="area3"
                        className={
                            'bg-gray-100 shadow-sm rounded-md p-8 rounded m-8'
                        }>
                        <label htmlFor="active">
                            Do you agree to being active on the server? <br />
                            <Field type="checkbox" name="active" />
                            {`${values.active}`}{' '}
                        </label>
                        <br />

                        <label htmlFor="rules">
                            Do you agree to the rules? <br />
                            <Field type="checkbox" name="rules" />
                            {`${values.rules}`}{' '}
                        </label>
                        <br />

                        <label htmlFor="anythingElse" className={'m-2'}>
                            Do you want to say anything else? (Not mandatory){' '}
                            <br />
                            <Field
                                as="textarea"
                                className={
                                    'bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full'
                                }
                                rows="5"
                                cols="25"
                                id="anythingElse"
                                name="anythingElse"
                                placeholder=""
                            />{' '}
                        </label>
                        <br />
                    </div>

                    <div
                        id="area4"
                        className={
                            'bg-gray-100 shadow-sm rounded-md p-8 rounded m-8'
                        }>
                        <button
                            type="submit"
                            className={
                                'bg-green-500 text-4xl content-center rounded p-4 text-white'
                            }>
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

ReactDOM.render(<Basic />, document.getElementById('root'));
