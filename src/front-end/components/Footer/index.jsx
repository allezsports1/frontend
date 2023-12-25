import React from 'react';
import classes from './footer.scss';
import { ALL_RIGHT_RESERVE, NAVIGATION, SITE_LOGO, SITE_TITLE, SITE_SOCIAL_PROFILE, ABOUT_COMPANY} from '../../constants';
import { Link } from 'react-router-dom';
import { Typography, Box} from '@mui/material';
import { useNavigate } from "react-router-dom";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const navigate =  useNavigate()
  return (
      <>
      <div className='upper-footer'>
          <div className='container'>
      
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                  <Box className="footer-logo cursor-pointer">
                    <img src={SITE_LOGO.footer} alt={SITE_TITLE} onClick={()=> navigate(NAVIGATION.home.link)} />
                  </Box>
                  <Typography>{ABOUT_COMPANY.footer_info}</Typography>
                  {Object.values(SITE_SOCIAL_PROFILE)?.length > 0 && <ul className="mt-8 flex gap-6">
                    {SITE_SOCIAL_PROFILE?.facebook && <li><a rel = 'noreferrer' title='facebook' target="_blank" href={SITE_SOCIAL_PROFILE?.facebook} >
                      <FacebookOutlinedIcon className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] cursor-pointer transition`} />
                    </a></li>}

                    {SITE_SOCIAL_PROFILE?.instagram && <li><a rel = 'noreferrer' title='instagram' target="_blank" href={SITE_SOCIAL_PROFILE?.instagram} >
                      <InstagramIcon className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] cursor-pointer transition`} />
                    </a></li>}

                    {SITE_SOCIAL_PROFILE?.twitter && <li><a rel = 'noreferrer' title='twitter' target="_blank" href={SITE_SOCIAL_PROFILE?.twitter} >
                      <TwitterIcon className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] cursor-pointer transition`} />
                    </a></li>}

                    {SITE_SOCIAL_PROFILE?.youtube && <li><a rel = 'noreferrer' title='youtube' target="_blank" href={SITE_SOCIAL_PROFILE?.youtube} >
                      <YouTubeIcon className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] cursor-pointer transition`} />
                    </a></li>}

                    {SITE_SOCIAL_PROFILE?.linkedin && <li><a rel = 'noreferrer' title='linkedin' target="_blank" href={SITE_SOCIAL_PROFILE?.linkedin} >
                      <LinkedInIcon className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] cursor-pointer transition`} />
                    </a></li>}

                    {SITE_SOCIAL_PROFILE?.whatsApp && <li><a rel = 'noreferrer' title='whatsApp' target="_blank" href={SITE_SOCIAL_PROFILE?.whatsApp} >
                      <WhatsAppIcon className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] cursor-pointer transition`} />
                    </a></li>}

                  </ul>}
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                <div>
                    <Typography variant='h5' className="font-medium">Company</Typography>
                    <ul className="mt-6 space-y-4">
                    <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={NAVIGATION.about.link} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>{NAVIGATION.about.name}</span>
                        </Link>
                      </li>
                      <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={NAVIGATION.blogs.link} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>{NAVIGATION.blogs.name}</span>
                        </Link>
                      </li>

                      <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={NAVIGATION.news.link} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>{NAVIGATION.news.name}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <Typography variant='h5' className="font-medium text-gray-900 dark:text-white">Sport Categories</Typography>
                    <ul className="mt-6 space-y-4">
                      <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={""} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>About</span>
                        </Link>
                      </li>

                    </ul>
                  </div>

                  

                  <div>
                    <Typography variant='h5' className="font-medium text-gray-900 dark:text-white">Support</Typography>
                    <ul className="mt-6 space-y-4">
                    <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={NAVIGATION.contactUs.link} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>{NAVIGATION.contactUs.name}</span>
                        </Link>
                      </li>

                      <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={"!#"} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>Email</span>
                        </Link>
                      </li>

                      <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={"!#"} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>WhatsApp</span>
                        </Link>
                      </li>

                      <li className={`border-b-[1px] border-[${classes.rgbColor3}] py-2`}>
                        <Link to={"!#"} className={`text-[${classes.contentColor1}] hover:text-[${classes.bgColor2}] transition`}>
                          <span>Call Us</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className='bottom-footer'>
        <div className='container'>
          <div className='row'>
              <div className='col-6-xl left'><span>&copy; {new Date()?.getFullYear()} <Link to={NAVIGATION.home.link}><strong className='color-white'>{SITE_TITLE}</strong></Link> {ALL_RIGHT_RESERVE}</span></div>
              <div className='col-6-xl text-right'>
                <span className='color-white cursor-pointer'><Link to={NAVIGATION.termCondition.link}>{NAVIGATION.termCondition.name}</Link></span>
                <span className='slash'>|</span>
                <span className='color-white cursor-pointer'><Link to={NAVIGATION.privacyPolicy.link}>{NAVIGATION.privacyPolicy.name}</Link></span>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer