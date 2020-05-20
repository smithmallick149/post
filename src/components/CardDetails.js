import React, { useState } from 'react';
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Row,
	Col,
	Collapse,
	Button,
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

const CardDetails = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	console.log(props, 'props');
	// const getPost = useSelector(
	//   (state) => state.myReducer.postId.find((oc) => oc.id === props.match.params.id) || {}
	// );
	const getPost = useSelector((state) => state.myReducer.postId);
	const getComments = useSelector((state) => state.myReducer.comments);
	console.log(getPost, 'getPost');
	console.log(getComments, 'getComments');
	return (
		<div className="container">
			{!isEmpty(getPost) && (
				<Card
					xs={6}
					md={6}
					style={{ margin: 5, borderRadius: 5, borderColor: 'DodgerBlue' }}>
					<CardBody style={{ backgroundColor: 'AliceBlue' }}>
						<Row>
							<Col>
								{' '}
								<CardTitle style={{ fontSize: 20 }}> {getPost.id}</CardTitle>
							</Col>
							<div style={{ display: 'flex' }}>
								<Col tyle={{ marginLeft: 'auto', backgroundColor: '#ff2b57' }}>
									<CardTitle style={{ color: 'DarkSlateGray' }}>
										{' '}
										{getPost.userId}
									</CardTitle>
								</Col>
							</div>
						</Row>
						<CardSubtitle
							style={{
								textAlign: 'center',
								fontSize: 30,
								color: 'DarkSlateGray',
								fontWeight: 600,
							}}>
							{getPost.title}
						</CardSubtitle>
						<CardText>{getPost.body}</CardText>
					</CardBody>
				</Card>
			)}

			<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
				<i className="fa fa-comments" style={{ fontSize: 24, margin: 5 }}></i>
				Comments
			</Button>
			{!isEmpty(getComments) &&
				getComments.map((data, i) => (
					<Collapse isOpen={isOpen} key={i}>
						<Card style={{ margin: 5 }}>
							<Col>
								{' '}
								<CardTitle style={{ fontSize: 20 }}>
									{' '}
									<i
										className="fa fa-user"
										style={{ fontSize: 24, margin: 5 }}></i>
									{data.name}
								</CardTitle>
							</Col>
							<Col>
								{' '}
								<CardTitle style={{ fontSize: 20 }}>
									{' '}
									<i
										className="fa fa-envelope"
										style={{ fontSize: 24, margin: 5 }}></i>
									{data.email}
								</CardTitle>
							</Col>
							<CardBody>
								<i
									className="fa fa-comments"
									style={{ fontSize: 24, margin: 5 }}></i>
								{data.body}
							</CardBody>
						</Card>
					</Collapse>
				))}
		</div>
	);
};

export default CardDetails;
