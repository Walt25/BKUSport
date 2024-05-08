import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';

export type CheckboxListType = {
    title: string,
    listItem: string[]
}

type GroupCheckboxesProps = {
    input: CheckboxListType
}

export const GroupCheckboxes:React.FC<GroupCheckboxesProps> = (props) => {
    const {input} = props
  return (
    <div>
      <Typography id="sandwich-group" level="body-sm" fontWeight="lg" mb={1} sx={{color: 'black'}}>
        {input.title}
      </Typography>
      <div role="group" aria-labelledby="sandwich-group">
        <List size="sm">
            {
                input.listItem.map((item, key) => (
                    <ListItem key={key} sx={{margin: 0, padding: 0}}>
                        <Checkbox label={`${item}`} defaultChecked size='sm'/>
                    </ListItem>
                ))
            }
        </List>
      </div>
    </div>
  );
}