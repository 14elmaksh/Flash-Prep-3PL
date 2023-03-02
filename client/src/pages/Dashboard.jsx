import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getOrders } from '../features/orders/orderSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
	const dispatch = useDispatch();

	const { myOrders } = useSelector(state => state.order);

	console.log(myOrders);

	useEffect(() => {
		dispatch(getOrders());
	}, [dispatch]);

    return (
        <div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Date</th>
						<th>Product</th>
						<th>ASIN</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					{
						myOrders?.map((order) => (
							<tr>
								<td>{moment(order.createdAt).format("DD/MM/YYYY")}</td>
								<td>{order.product.productName}</td>
								<td>{order.product.asin}</td>
								<td>{order.qnty}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
    )
}

export default Dashboard