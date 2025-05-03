import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [ccpp, setccpp] = useState(0);
    const [javascript, setjavascript] = useState(0);
    const [python, setpython] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (ccpp < 85) {
                setccpp(prevCount => prevCount + 1);
            }
            if (javascript < 90) {
                setjavascript((prevCount) => prevCount + 1);
            }
            if (python < 60) {
                setpython((prevCount) => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [ccpp, javascript]);
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={ccpp} size={55} />
                        <span className='text-xs font-bold text-Snow'>C/C++</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={javascript} size={55} />
                        <span className='text-xs font-bold text-Snow'>JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={python} size={55} />
                        <span className='text-xs font-bold text-Snow'>Python</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages