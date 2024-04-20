import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export type BreadcrumbType = {
    title: string,
    link?: string
}

type BreadcrumbProps = {
    item: BreadcrumbType[]
}

export const Breadcrumb:React.FC<BreadcrumbProps> = (props) => {
    const {item} = props
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {
            item.map((item, key) => (
                <Link underline="hover" color="inherit" href={item.link} key={key} className='text-sm'>
                    {item.title}
                </Link>
            ))
        }
      </Breadcrumbs>
    </div>
  );
}