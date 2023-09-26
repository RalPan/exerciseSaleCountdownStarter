import React, {useState, useEffect} from 'react'
import { isAfter, formatDuration, intervalToDuration } from 'date-fns'
//import GetTimer from './GetTimer';

function SaleBanner() {
    const saleEnds = new Date(2023, 8, 29, 0, 0, 0); // ends at 29 Sept 2023 (months have 0-based indexing)
    //const saleEnds = new Date(2023, 8, 26, 12, 23, 0); // testing the end of the sale

    var duration = intervalToDuration({
                    start: new Date(),
                    end: saleEnds,
                });

                var [timer, setTimer] = useState(formatDuration(duration, {
                delimiter: ': '}));

    useEffect(() => {
        // EFFECT LOGIC
        const intervalID = setInterval(refresh, 200, saleEnds);

        //EFFECT CLEAN UP
        return function cleanUp() {
        if (isAfter(new Date(), saleEnds)){
                clearInterval(intervalID);
                duration = 0;
                setTimer(0);
                console.log("Cleaned up");
                }
        };
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

      });
    if (timer == 0){
                return false;
                }

  return (
    <div class="bannerCover bg-gray-900">
    <link rel="stylesheet" type="text/css" href="/dist/output.css"/>

        <div class="banner bg-gray-900 py-6 sm:py-5">
        <h2 class="text-3xl text-white text-center font-bold tracking-tight">
        Act now! Buy one get one 50% off!</h2>
        <h3 class="text-xl text-white text-center tracking-tight">
        Sale Ends In: {timer}</h3>

       </div>
       </div>
  );
}

export default SaleBanner;
