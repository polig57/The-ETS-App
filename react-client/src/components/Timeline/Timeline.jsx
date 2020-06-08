import React from 'react';
import timelineData from './Data';
import TimelineItem from './TimelineItem.jsx';

//this will be the timeline that the user is directed to after form submission with data

const Timeline = () =>
  timelineData.length > 0 && (
    <div className='timeline-container'>
      {timelineData.map((data, i) => (
        <TimelineItem data={data} key={i} />
      ))}
    </div>
  )

export default Timeline;