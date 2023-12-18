import './topBanner.scss';
import { Typography } from '@mui/material';
import Breadcrumb from '../../organisms/breadcrumbs';

const TopBanner = ({
    pageTitle = '',
    containerClass = '',
    style = '',
    class_name = ''
}) =>{

    return(<>
        <section className={`top-banner ${containerClass}`}>
            <div className='image-container' style={style}>
                <div className="cover_color">
                    <Typography variant='h1' className="header_title">{pageTitle}</Typography>
                    <Breadcrumb title={pageTitle} class_name={class_name} />
                </div>
            </div>
        </section>
    </>)
}

export default TopBanner;