import { formatDuration, intervalToDuration } from 'date-fns'

function getTimer(props) {
    const duration = intervalToDuration({
            start: new Date(),
            end: props.endDate,
        });
    const timer = formatDuration(duration, {
                    delimiter: ': ' });
  return (
    <div>
      <p>{timer}</p>
    </div>
  );
}

export default GetTimer;

