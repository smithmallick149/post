import React from 'react';
import {
	Card,
	Collapse,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Row,
	Col,
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { GET_ALL_POSTS_ID, SAVE_ALL_COMMENTS } from '../stores/myReducer';
import { deletPosts } from '../stores/myReducer';

const Cardview = (props) => {
	const allposts = useSelector((state) => state.myReducer.allPosts);
	console.log(allposts, '>>>>>>>>');
	const dispatch = useDispatch();
	const openPost = (id) => {
		props.history.push('/cardDetails/' + id);

		dispatch({ type: GET_ALL_POSTS_ID, payload: id });
		// dispatch({ type: SAVE_ALL_COMMENTS, payload: id });
	};

	const deleteP = (id) => {
		console.log(id, 'id');
		dispatch(deletPosts(id));
	};
	return (
		<div className="container">
			{!isEmpty(allposts) &&
				allposts.map((data, i) => (
					<Card
						xs={6}
						md={6}
						key={i}
						style={{
							margin: 5,
							borderRadius: 5,
							borderColor: 'CornflowerBlue',
						}}>
						<CardBody style={{ backgroundColor: 'Azure' }}>
							<Row>
								<Col>
									{' '}
									<CardTitle style={{ fontSize: 20 }}> {data.id}</CardTitle>
								</Col>
								{/* <Col></Col> */}
								<Col>
									<CardTitle> {data.userId}</CardTitle>
								</Col>
								<div style={{ display: 'flex' }}>
									<Button
										style={{ marginLeft: 'auto', backgroundColor: '#ff2b57' }}
										onClick={() => deleteP(data.id)}>
										<i className="fa fa-trash" style={{ fontSize: 24 }}></i>
									</Button>
								</div>
							</Row>
							<CardSubtitle
								style={{
									textAlign: 'center',
									fontSize: 30,
									color: 'DarkSlateGray',
									fontWeight: 600,
								}}>
								{data.title}
							</CardSubtitle>
							<CardText>{data.body}</CardText>
							<Link
								to={{
									pathname: '/update/' + data.id,
									state: { data },
								}}>
								<div style={{ display: 'flex' }}>update</div>
							</Link>
							<Link onClick={() => openPost(data.id)}>
								<div style={{ display: 'flex' }}>
									{/* <Link to={"/cardDetails/" + data.id}><div style={{ display: "flex" }}> */}
									<div style={{ marginLeft: 'auto' }}>
										<i className="fa fa-angle-right" style={{ fontSize: 25 }}>
											More
										</i>
									</div>
								</div>
							</Link>
						</CardBody>
					</Card>
				))}
			}
		</div>
	);
};

export default Cardview;
