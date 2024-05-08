import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import { ReactElement } from 'react';


type DenseMenuProps = {
    item: ReactElement[]
}

export const DenseMenu:React.FC<DenseMenuProps> = (props) => {

    const {item} = props

    return (
    <Paper className='w-full'>
      <MenuList dense >
        <div className='px-6 py-2'>
          <ListItemText>{item[0]}</ListItemText>
        </div>
        {
            item.slice(1).map((item, key) => (
                <>
                    <Divider /> 
                    <div key={key} className='px-6 py-3'>
                        <ListItemText>{item}</ListItemText>
                    </div>
                </>
                
            ))
        }
      </MenuList>
    </Paper>
  );
}