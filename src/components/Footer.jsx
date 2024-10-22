




"use client";

import styles from './Footer.module.css'
import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';

export default function Footer() {

	return (




		<React.Fragment>

			<footer className={styles.footer_distributed}>

				<div className={styles.footer_left}>

					<h3>Company<span>logo</span></h3>

					<p className={styles.footer_links}>
						<a href="#" className={styles.link_1}>Home&nbsp;</a>

						<a href="#">Blog&nbsp; </a>

						<a href="#">Pricing&nbsp; </a>

						<a href="#">About&nbsp; </a>

						<a href="#">Faq&nbsp; </a>

						<a href="#">Contact </a>
					</p>

					<p className={styles.footer_company_name}>Company Name © 2015</p>
				</div>

				<div className={styles.footer_center}>

					<div className='flex  items-center'>
						<LocationOnIcon className=' mr-2' />
						<p>444 S. Cedros Ave, Solana Beach, California</p>
					</div>

					<div className='flex  items-center'>
						<PhoneIcon className=' mr-2' />
						<p>+1.555.555.5555</p>
					</div>

					<div className='flex  items-center'>
						<EmailIcon className=' mr-2' />	
					<p><a href="mailto:support@company.com">support@company.com</a></p>
					</div>

				</div>

				<div className={styles.footer_right}>



					<div className={styles.footer_icons}>
						<Typography>Follow us on:</Typography>
						<FacebookIcon className={styles.icons} />
						<YouTubeIcon className={styles.icons} />
						<TwitterIcon className={styles.icons} />
						<InstagramIcon className={styles.icons} />

					</div>

				</div>

			</footer>
		</React.Fragment>
	);
}