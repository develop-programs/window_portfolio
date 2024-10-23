import moment from "moment";
import React from "react";

function useCurrentTime() {
    const [time, setCurrentTime] = React.useState("");
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format("hh:mm a dddd MMMM D"));
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    return time;
}

export default useCurrentTime;