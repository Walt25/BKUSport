import { Calendar, Whisper, Popover, Badge } from 'rsuite';

function getTodoList(date: any) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' }
      ];
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' },
        { time: '02:00 pm', title: 'Product design discussion' },
        { time: '05:00 pm', title: 'Product test and acceptance' },
        { time: '06:30 pm', title: 'Reporting' },
        { time: '10:00 pm', title: 'Going home to walk the dog' }
      ];
    default:
      return [];
  }
}

export const CalendarV2 = () => {
    function renderCell(date: any) {
        const list = getTodoList(date);
        const displayList = list.filter((item, index) => index < 2);
    
        if (list.length) {
          const moreCount = list.length - displayList.length;
          const moreItem = (
            <li>
              <Whisper
                placement="top"
                trigger="click"
                speaker={
                  <Popover>
                    {list.map((item, index) => (
                      <p key={index}>
                        <b>{item.time}</b> - {item.title}
                      </p>
                    ))}
                  </Popover>
                }
              >
                <a>{moreCount} more</a>
              </Whisper>
            </li>
          );
    
          return (
            <ul className="calendar-todo-list text-left p-0 list-none">
              {displayList.map((item, index) => (
                <li key={index} className='overflow-hidden text-ellipsis whitespace-nowrap'>
                  <Badge className='align-top mt-[8px] w-[6px] h-[6px]'/> <b>{item.time}</b> - {item.title}
                </li>
              ))}
              {moreCount ? moreItem : null}
            </ul>
          );
        }
    
        return null;
      }
    return <Calendar bordered renderCell={renderCell} />;
}
