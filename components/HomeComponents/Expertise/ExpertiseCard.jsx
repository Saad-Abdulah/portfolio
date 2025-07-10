import CardLayout from "../../Common/CardLayout"
import LinearBar from '../../Common/Intro/LinearBar';


const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                <div className=" text-Snow">{data.title}</div>
                <div className="text-sm text-LightGray font-normal">
                    {data.desc}
                </div>
                <div className="text-sm text-LightGray font-normal">
                    {/* Don't show % of skills */}
                    {data.skills?.map((skill) => (
                        <LinearBar key={skill.title} title={skill.title} percent={skill.level} bgColor='bg-Green' />
                    ))}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard