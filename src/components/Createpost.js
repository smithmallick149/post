import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createBaseData } from './createData'
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../stores/myReducer'

const Createpost = (props) => {
  const [createData, setCreate] = useState(createBaseData)
  const dispatch = useDispatch();
  const formSubmit = () => {
    dispatch(addPost(createData));
  }
  return (

    <Form>
      <FormGroup>
        <Label for="exampleEmail">title</Label>
        <Input type="text" name="text" id="exampleEmail" placeholder="Enter a title" required onChange={(txt) => setCreate({ ...createData, title: txt.target.value })} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">UserId</Label>
        <Input type="number" name="text" id="exampleText" required onChange={(txt) => setCreate({ ...createData, userI: txt.target.value })} />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" required onChange={(txt) => setCreate({ ...createData, body: txt.target.value })} />
      </FormGroup>


      <Button onClick={() => formSubmit()}>Submit</Button>
    </Form >
  );
}

export default Createpost;