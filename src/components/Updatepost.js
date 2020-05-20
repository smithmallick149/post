import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { updateBaseData } from './updateData';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost } from '../stores/myReducer';
import { createBaseData } from './createData';

const Createpost = (props) => {
	console.log(props.location.state.data);
	const [createData, setCreate] = useState(props.location.state.data);
	const dispatch = useDispatch();
	const formSubmit = () => {
		dispatch(updatePost(createData));
	};
	return (
		<Form>
			<FormGroup>
				<Label for="exampleEmail">title</Label>
				<Input
					type="text"
					name="text"
					id="exampleEmail"
					placeholder="Enter a title"
					value={createData.title}
					required
					onChange={(txt) =>
						setCreate({ ...createData, title: txt.target.value })
					}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="exampleText">UserId</Label>
				<Input
					type="number"
					name="text"
					id="exampleText"
					value={createData.userId}
					required
					onChange={(txt) =>
						setCreate({ ...createData, userId: txt.target.value })
					}
				/>
			</FormGroup>

			<FormGroup>
				<Label for="exampleText">Description</Label>
				<Input
					type="textarea"
					name="text"
					id="exampleText"
					value={createData.body}
					required
					onChange={(txt) =>
						setCreate({ ...createData, body: txt.target.value })
					}
				/>
			</FormGroup>

			<Button onClick={() => formSubmit()}>Submit</Button>
		</Form>
	);
};

export default Createpost;
