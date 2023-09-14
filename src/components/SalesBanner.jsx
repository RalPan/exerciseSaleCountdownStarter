import React, {useState} from 'react'
import { isAfter, formatDuration, intervalToDuration } from 'date-fns'
//import GetTimer from './GetTimer';

function SaleBanner() {
    const saleEnds = new Date(2023, 8, 19, 0, 0, 0); // ends at 19 Sept 2023 (months have 0-based indexing)

    var duration = intervalToDuration({
        start: new Date(),
        end: saleEnds,
    });

    const [timer, setTimer] = useState(formatDuration(duration, {
    delimiter: ': '}));
    const intervalID = setInterval(refresh, 200, saleEnds);
    if (timer == 0){
    return false;
    }

    function refresh(saleEnds) {
            duration = intervalToDuration({
                    start: new Date(),
                    end: saleEnds,
                });
                if (isAfter(new Date(), saleEnds)){
                            clearInterval(intervalID);
                            duration = 0;
                            }
            setTimer(formatDuration(duration, {delimiter: ': ' }));

            }
  return (
    <div class="bannerCover bg-gray-900">
    <link rel="stylesheet" type="text/css" href="/dist/output.css"/>

        <div class="banner bg-gray-900 py-6 sm:py-5">
        <h2 class="text-3xl text-white text-center font-bold tracking-tight">
        Act now! Buy one get one 50% off!</h2>
        <h3 class="text-xl text-white text-center tracking-tight">
        Sale Ends In: {timer}</h3>

      {/*
      <GetTimer endDate={saleEnds} />
        Replace with your UI logic
       */}
       </div>
       </div>
  );
}

export default SaleBanner;
