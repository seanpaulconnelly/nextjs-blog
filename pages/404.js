import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>404 - Page Not Found</title>
			</Head>
			<div className={utils.container}>
				<div className={utils.header}>
					<h1 className={utils.headingXl}>404 - Page Not Found</h1>
				</div>
			</div>
		</Layout>
	)
}